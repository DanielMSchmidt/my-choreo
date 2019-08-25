import * as React from "react";
import { navigate } from "@reach/router";

import Loading from "../components/Loading";
import { useCreateChoreoMutation } from "../graphql";

// Creates a new choreo and redirects to it
export default function CreateChoreoRedirect(_props: { path: string }) {
  const [createChoreo] = useCreateChoreoMutation({});

  React.useEffect(() => {
    console.log("Creating Choreo");

    // randomly generated prefix
    const publicId =
      Math.random()
        .toString(36)
        .substring(2, 15) +
      Math.random()
        .toString(36)
        .substring(2, 15);

    createChoreo({ variables: { publicId } }).then(
      ({ data, errors }) => {
        if (errors) {
          console.error("Errors:", errors);
          return;
        }

        if (!data) {
          console.warn("No data");
          return;
        }

        const result = data.insert_choreo ? data.insert_choreo.returning : [];

        if (!result.length) {
          console.warn("No data in array");
          return;
        }

        const [{ id, public_id_prefix }] = result;
        navigate(`/choreo/${public_id_prefix}/${id}`);
      },
      err => console.error(err)
    );
  }, [createChoreo]);

  return <Loading />;
}
