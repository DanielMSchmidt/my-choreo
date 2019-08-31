import * as React from "react";

import "./Button.css";

export function Button({
  onClick,
  children
}: {
  onClick: () => void;
  children: React.ReactChildren | string;
}) {
  return (
    <a className="button" onClick={onClick} rel="nofollow noopener">
      {children}
    </a>
  );
}
