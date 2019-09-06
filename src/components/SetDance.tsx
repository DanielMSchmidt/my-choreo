import React from "react";
import { useUpdateChoreoDanceMutation } from "../graphql";

import "./SetDance.css";

type Dance = {
  name: string;
  phrase: number;
};

export default function SetDance({
  availableDances,
  choreoId,
  danceName: initialDanceName
}: {
  availableDances: Dance[];
  choreoId: number;
  danceName: string;
}) {
  const [setDance] = useUpdateChoreoDanceMutation();
  const onSelect = (e: any) => {
    const danceName = e.target.value;
    const dance = availableDances.find(dance => dance.name === danceName);

    if (!dance) {
      console.error("Could not find dance, strange");
      return;
    }

    setDance({
      variables: { choreoId, danceName: dance.name, dancePhrase: dance.phrase }
    });
  };

  return (
    <>
      <select className="set-dance" onChange={onSelect}>
        {availableDances.map(dance => (
          <option
            selected={initialDanceName === dance.name}
            key={dance.name}
            value={dance.name}
          >
            {dance.name}
          </option>
        ))}
      </select>
    </>
  );
}
