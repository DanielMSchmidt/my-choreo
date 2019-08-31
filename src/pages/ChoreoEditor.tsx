import React from "react";
import { Link } from "@reach/router";
import TooltipTrigger from "react-popper-tooltip";

import Loading from "../components/Loading";
import {
  StepsComponent,
  useAddStepMutation,
  useAddFigureMutation
} from "../graphql";

import "./ChoreoEditor.css";
import { lengthToTiming, Timing, timingToLength } from "../types/timing";

const randomColor = () =>
  "#" + Math.round(0xffffff * Math.random()).toString(16);

type Step = {
  comment?: string | null;
  timing: number;
};

type Tag = {
  type: string;
  title: string;
  color: string;
  timing_start: number;
  timing_end: number;
};

function StepEditor({
  timing,
  previousTiming,
  figure
}: Step & { previousTiming: number | null; figure?: Tag }) {
  // TODO: add rhythm properly
  // const rhythm = 8;

  return (
    <TooltipTrigger
      placement="top"
      trigger="hover"
      tooltip={({ tooltipRef, getTooltipProps }) => (
        <div
          {...getTooltipProps({
            className: "tooltip-container",
            ref: tooltipRef
          })}
        >
          {figure ? figure.title : undefined}
        </div>
      )}
    >
      {({ triggerRef, getTriggerProps }) => (
        <div
          {...getTriggerProps({
            ref: triggerRef
          })}
          className="stepEditor"
          style={{ backgroundColor: figure ? figure.color : "#FFF" }}
        >
          <span>
            {lengthToTiming(
              timing - (previousTiming === null ? 0 : previousTiming)
            )}
          </span>
          {/* {" / "}
      <span>{timing % rhythm}</span> */}
        </div>
      )}
    </TooltipTrigger>
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

function TagFigure({
  createFigureMode,
  reset,
  start
}: {
  createFigureMode: Boolean;
  reset: () => void;
  start: () => void;
}) {
  return (
    <div>
      {createFigureMode ? (
        <span onClick={reset}>Stop</span>
      ) : (
        <span onClick={start}>Start</span>
      )}
    </div>
  );
}

function ChoreoEditor({
  steps,
  tags,
  choreoId,
  refetch
}: {
  steps: Step[];
  tags: Tag[];
  choreoId: number;
  refetch: () => void;
}) {
  const [addFigure] = useAddFigureMutation();
  const [createFigureMode, setCreateFigure] = React.useState(false);
  const [figureStart, setFigureStart] = React.useState<number | null>(null);
  const figures = tags.filter(tag => tag.type === "Figure");

  const reset = () => {
    setCreateFigure(false);
    setFigureStart(null);
  };

  return (
    <>
      <div className="actions">
        <NewStep
          previousTiming={steps.length ? steps[steps.length - 1].timing : 0}
          choreoId={choreoId}
          refetch={refetch}
        />

        <TagFigure
          createFigureMode={createFigureMode}
          reset={reset}
          start={() => setCreateFigure(true)}
        />
      </div>

      <div className="choreoEditor">
        {steps.map((step, index) => (
          <div
            key={step.timing}
            onClick={
              createFigureMode
                ? figureStart === null
                  ? () => setFigureStart(step.timing)
                  : () => {
                      const name = prompt("How is this figure called?");
                      if (!figureStart || !name) {
                        return;
                      }

                      addFigure({
                        variables: {
                          choreoId,
                          color: randomColor(),
                          content: "",
                          title: name,
                          timing_end: step.timing,
                          timing_start: figureStart
                        }
                      }).then(() => {
                        setCreateFigure(false);
                        setFigureStart(null);
                        refetch();
                      });
                    }
                : undefined
            }
          >
            <StepEditor
              key={step.timing}
              {...step}
              figure={figures.find(
                tag =>
                  tag.timing_start <= step.timing &&
                  step.timing <= tag.timing_end
              )}
              previousTiming={index === 0 ? null : steps[index - 1].timing}
            />
          </div>
        ))}
      </div>

      <div>
        <Link to="test">Learn Your Choreo</Link>
      </div>
    </>
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
              tags={choreo.tags}
              choreoId={id}
            />
          );
        }}
      </StepsComponent>
    );
  }

  return <Loading />;
}
