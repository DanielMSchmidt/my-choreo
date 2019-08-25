import React from "react";
import Loading from "../components/Loading";
import { StepsComponent } from "../graphql";

import "./ChoreoEditor.css";

type Step = {
  comment?: string | null;
  timing: number;
};

enum Timing {
  Slow = "Slow",
  Quick = "Quick",
  And = "And",
  E = "E"
}

function getTimingName(previousTiming: number | null, timing: number): Timing {
  const stepLength = timing - (previousTiming === null ? 0 : previousTiming);

  switch (stepLength) {
    case 2:
      return Timing.Slow;
    case 1:
      return Timing.Quick;
    case 0.5:
      return Timing.And;
    case 0.25:
      return Timing.E;
    default:
      throw new Error("Could not find step length: " + stepLength);
  }
}

function StepEditor({
  timing,
  previousTiming
}: Step & { previousTiming: number | null }) {
  const rhythm = 8;
  return (
    <div className="stepEditor">
      <span>{getTimingName(previousTiming, timing)}</span>
      {" / "}
      <span>{timing % rhythm}</span>
    </div>
  );
}

function ChoreoEditor({ steps }: { steps: Step[] }) {
  return (
    <div className="choreoEditor">
      {steps.map((step, index) => (
        <StepEditor
          {...step}
          previousTiming={index === 0 ? null : steps[index - 1].timing}
        />
      ))}
    </div>
  );
}

export default function Choreo({
  prefix,
  id
}: {
  path: string;
  prefix?: string;
  id?: number;
}) {
  if (id && prefix) {
    return (
      <StepsComponent skip={false} variables={{ id, prefix }}>
        {({ loading, data }) => {
          if (loading || !data || !data.choreo.length) {
            return <Loading />;
          }

          const choreo = data.choreo[0];
          return <ChoreoEditor steps={choreo.steps} />;
        }}
      </StepsComponent>
    );
  }

  return <Loading />;
}
