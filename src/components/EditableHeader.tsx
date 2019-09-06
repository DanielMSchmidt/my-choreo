import * as React from "react";

import Header from "./Header";
import { useUpdateChoreoNameMutation } from "../graphql";

export default function EditableHeader({
  currentName,
  choreoId
}: {
  currentName: string;
  choreoId: number;
}) {
  const [setChoreoName] = useUpdateChoreoNameMutation();
  const [editMode, setEditMode] = React.useState(false);
  const [newName, setNewName] = React.useState(currentName);

  React.useEffect(() => {
    const handleClick = () => {
      setEditMode(false);
      setChoreoName({ variables: { choreoId, name: newName } });
    };

    // Bind the event listener
    document.addEventListener("mousedown", handleClick);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClick);
    };
  });

  if (editMode) {
    return (
      <div onClick={e => e.stopPropagation()}>
        <Header>
          <input
            autoFocus
            type="text"
            onChange={event => setNewName(event.target.value)}
            value={newName}
          />
        </Header>
      </div>
    );
  }
  return (
    <div onClick={() => setEditMode(true)}>
      <Header>{newName}</Header>
    </div>
  );
}
