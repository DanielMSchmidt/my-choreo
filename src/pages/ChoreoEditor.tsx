import React from "react";

export default function Choreo({
  prefix,
  id
}: {
  path: string;
  prefix?: string;
  id?: string;
}) {
  return (
    <h1>
      Choreo: {prefix}/{id}
    </h1>
  );
}
