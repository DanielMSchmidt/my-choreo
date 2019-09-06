import React from "react";
import Loading from "../components/Loading";
import { StepsComponent } from "../graphql";
import { Timing, lengthToTiming } from "../types/timing";

import "./ChoreoTest.css";
import Header from "../components/Header";

interface Step {
  timing: number;
}

function ChoreoTester({ steps }: { steps: Timing[] }) {
  const [writtenSteps, setWrittenSteps] = React.useState<Timing[]>([]);
  const [error, setError] = React.useState("");
  const [done, setDone] = React.useState(false);

  const onStepSelection = (selectedStep: Timing) => () => {
    // Check if current step is correct
    if (steps[writtenSteps.length] !== selectedStep) {
      setError(`Expected ${steps[writtenSteps.length]}, got ${selectedStep}`);
      return;
    }

    // Check if we are done
    if (steps.length === writtenSteps.length + 1) {
      setDone(true);
      return;
    }

    setWrittenSteps([...writtenSteps, selectedStep]);
  };

  const again = (
    <span
      onClick={() => {
        setWrittenSteps([]);
        setError("");
        setDone(false);
      }}
    >
      Again!
    </span>
  );

  if (done) {
    return (
      <>
        <h3>You made it!</h3>
        {again}
      </>
    );
  }

  if (error !== "") {
    return (
      <>
        <h3>{error}</h3>
        {again}
      </>
    );
  }

  return (
    <>
      <div className="ChoreoTester">
        {[Timing.Slow, Timing.Quick, Timing.And, Timing.E].map(timing => (
          <span
            className="ChoreoTesterTiming"
            key={timing}
            onClick={onStepSelection(timing)}
          >
            {timing}
          </span>
        ))}
      </div>
      <span className="ScoreBoard">{writtenSteps.length}</span>
    </>
  );
}

export default function ChoreoTest({
  prefix,
  id
}: {
  path: string;
  prefix?: string;
  id?: number;
}) {
  if (!id || !prefix) {
    return <Loading />;
  }

  return (
    <>
      <StepsComponent skip={false} variables={{ id, prefix }}>
        {({ loading, data }) => {
          if (loading || !data || !data.choreo.length) {
            return <Loading />;
          }

          const { steps, name } = data.choreo[0];

          return (
            <>
              <Header>{name || "My Choreo"}</Header>
              <ChoreoTester
                steps={steps.map((step, index) =>
                  lengthToTiming(
                    index === 0
                      ? step.timing
                      : step.timing - steps[index - 1].timing
                  )
                )}
              />
            </>
          );
        }}
      </StepsComponent>
    </>
  );
}
