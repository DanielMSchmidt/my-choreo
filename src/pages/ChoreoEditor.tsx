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
import {
  lengthToTiming,
  Timing,
  timingToLength,
  isTiming
} from "../types/timing";
import { Button } from "../components/Button";
import Header from "../components/Header";
import EditableHeader from "../components/EditableHeader";
import SetDance from "../components/SetDance";

const randomColor = () =>
  "#" + Math.round(0xffffff * Math.random()).toString(16);

type Step = {
  id: number;
  comment?: string | null;
  timing: Timing;
};

type Tag = {
  type: string;
  title: string;
  color: string;
  step_start: number;
  step_end: number;
};

function StepEditor({ timing, figure }: Step & { figure?: Tag }) {
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
          <span>{timing}</span>
          {/* {" / "}
      <span>{timing % rhythm}</span> */}
        </div>
      )}
    </TooltipTrigger>
  );
}

function NewStep({
  choreoId,
  refetch,
  onStepAdded
}: {
  choreoId: number;
  refetch: () => void;
  onStepAdded: () => void;
}) {
  const [addStep] = useAddStepMutation();
  const createNewStep = (timing: Timing) => {
    addStep({
      variables: { choreoId, timing: timing }
    })
      .then(refetch)
      .then(onStepAdded);
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
      <h3>
        {createFigureMode
          ? "Click on the first and last step"
          : "Tag steps as a figure"}
      </h3>
      {createFigureMode ? (
        <Button onClick={reset}>Stop</Button>
      ) : (
        <Button onClick={start}>Start</Button>
      )}
    </div>
  );
}

function ChoreoEditor({
  steps,
  tags,
  choreoId,
  danceName,
  refetch
}: {
  steps: Step[];
  tags: Tag[];
  choreoId: number;
  danceName: string;
  refetch: () => void;
}) {
  const editorRef = React.useRef<React.RefObject<HTMLDivElement>>(null);
  const [addFigure] = useAddFigureMutation();
  const [createFigureMode, setCreateFigure] = React.useState(false);
  const [figureStart, setFigureStart] = React.useState<number | null>(null);
  const figures = tags.filter(tag => tag.type === "Figure");

  const reset = () => {
    setCreateFigure(false);
    setFigureStart(null);
  };

  const onStepAdded = () => {
    if (editorRef && editorRef.current) {
      // Move as right as possible to the newest element
      // @ts-ignore
      editorRef.current.scrollTo(1000000, 0);
    }
  };

  return (
    <>
      <div className="actions">
        <SetDance
          choreoId={choreoId}
          danceName={danceName}
          availableDances={[
            { name: "Waltz", phrase: 6 },
            { name: "Tango", phrase: 8 },
            { name: "Viennese Waltz", phrase: 6 },
            { name: "Slowfox", phrase: 8 },
            { name: "Quickstep", phrase: 8 }
          ]}
        />

        <NewStep
          choreoId={choreoId}
          refetch={refetch}
          onStepAdded={onStepAdded}
        />

        <TagFigure
          createFigureMode={createFigureMode}
          reset={reset}
          start={() => setCreateFigure(true)}
        />
      </div>

      <div ref={editorRef as any} className="choreoEditor">
        {steps.map((step, index) => (
          <div
            key={step.timing}
            onClick={
              createFigureMode
                ? figureStart === null
                  ? () => setFigureStart(step.id)
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
                          step_end: step.id,
                          step_start: figureStart
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
                tag => tag.step_start <= step.id && step.id <= tag.step_end
              )}
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
            return (
              <>
                <Header>My Choreo</Header>

                <Loading />
              </>
            );
          }

          const choreo = data.choreo[0];
          return (
            <>
              <EditableHeader
                choreoId={id}
                currentName={choreo.name || "My Choreo"}
              />
              <ChoreoEditor
                refetch={() => refetch()}
                steps={
                  choreo.steps.filter(step => isTiming(step.timing)) as any
                }
                danceName={choreo.danceName || "Waltz"}
                tags={choreo.tags}
                choreoId={id}
              />
            </>
          );
        }}
      </StepsComponent>
    );
  }

  return (
    <>
      <Header>My Choreo</Header>
      <Loading />
    </>
  );
}
