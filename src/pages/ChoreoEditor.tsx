import React from "react";
import { Link } from "@reach/router";
import TooltipTrigger from "react-popper-tooltip";

import Loading from "../components/Loading";
import { StepsComponent, useAddStepMutation } from "../graphql";

import "./ChoreoEditor.css";
import { lengthToTiming, Timing, timingToLength } from "../types/timing";

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
  const figures = tags.filter(tag => tag.type === "Figure");

  return (
    <>
      <div className="choreoEditor">
        {steps.map((step, index) => (
          <StepEditor
            key={step.timing}
            {...step}
            figure={figures.find(
              tag =>
                tag.timing_start <= step.timing && step.timing <= tag.timing_end
            )}
            previousTiming={index === 0 ? null : steps[index - 1].timing}
          />
        ))}
        <NewStep
          previousTiming={steps.length ? steps[steps.length - 1].timing : 0}
          choreoId={choreoId}
          refetch={refetch}
        />
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
