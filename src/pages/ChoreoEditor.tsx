import React from "react";
import Loading from "../components/Loading";
import { StepsComponent, useAddStepMutation } from "../graphql";

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

function timingToLength(timing: Timing): number {
  switch (timing) {
    case Timing.Slow:
      return 2;
    case Timing.Quick:
      return 1;
    case Timing.And:
      return 0.5;
    case Timing.E:
      return 0.25;
  }
}
function lengthToTiming(stepLength: number): Timing {
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
  // TODO: add rhythm properly
  // const rhythm = 8;
  return (
    <div className="stepEditor">
      <span>
        {lengthToTiming(
          timing - (previousTiming === null ? 0 : previousTiming)
        )}
      </span>
      {/* {" / "}
      <span>{timing % rhythm}</span> */}
    </div>
  );
}

function NewStep({
  previousTiming,
  choreoId,
  refetch
}: {
  previousTiming: number;
  choreoId: number;
  refetch: () => void;
}) {
  const [addStep] = useAddStepMutation();
  const createNewStep = (timing: Timing) => {
    addStep({
      variables: { choreoId, timing: timingToLength(timing) + previousTiming }
    }).then(refetch);
  };

  return (
    <div className="stepEditor is-new">
      {[Timing.Slow, Timing.Quick, Timing.And, Timing.E].map(time => (
        <span
          key={time}
          className="stepSelection"
          onClick={createNewStep.bind(null, time)}
        >
          {time}
        </span>
      ))}
    </div>
  );
}

function ChoreoEditor({
  steps,
  choreoId,
  refetch
}: {
  steps: Step[];
  choreoId: number;
  refetch: () => void;
}) {
  return (
    <div className="choreoEditor">
      {steps.map((step, index) => (
        <StepEditor
          key={step.timing}
          {...step}
          previousTiming={index === 0 ? null : steps[index - 1].timing}
        />
      ))}
      <NewStep
        previousTiming={steps.length ? steps[steps.length - 1].timing : 0}
        choreoId={choreoId}
        refetch={refetch}
      />
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
        {({ loading, data, refetch }) => {
          if (loading || !data || !data.choreo.length) {
            return <Loading />;
          }

          const choreo = data.choreo[0];
          return (
            <ChoreoEditor
              refetch={() => refetch()}
              steps={choreo.steps}
              choreoId={id}
            />
          );
        }}
      </StepsComponent>
    );
  }

  return <Loading />;
}
