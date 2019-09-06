import React, { ReactChildren, ReactChild } from "react";

export default function({
  children
}: {
  children: ReactChildren | string | Element | ReactChild;
}) {
  return (
    <header className="App-header">
      <h1>{children}</h1>
    </header>
  );
}
