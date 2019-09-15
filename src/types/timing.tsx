export enum Timing {
  Slow = "Slow",
  Quick = "Quick",
  And = "And",
  E = "E"
}

export function timingToLength(timing: Timing): number {
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
export function lengthToTiming(stepLength: number): Timing {
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

export function isTiming(timing: unknown): timing is Timing {
  return (
    timing &&
    typeof timing === "string" &&
    [
      Timing.And.toString(),
      Timing.E.toString(),
      Timing.Quick.toString(),
      Timing.Slow.toString()
    ].includes(timing)
  );
}

function previousFullBeatsIndex(timings: number[]) {
  for (let i = timings.length - 1; i >= 0; i--) {
    if (timings[i] % 1 !== 0) {
      return i;
    }
  }

  return -1;
}

export function timingsToNumber(timings: Timing[]): number[] {
  return [
    1,
    ...timings.reduce(
      (carry, timing) => {
        const lastStepTiming = carry.length ? carry[carry.length - 1] : 1;

        if (timing === Timing.Quick || timing === Timing.Slow) {
          return [...carry, lastStepTiming + timingToLength(timing)];
        }

        console.log({ carry, timing });

        // These timings borrow time from the step(s) before
        const lastStep = carry.pop();
        console.log({ lastStep });
        if (!lastStep) {
          // TODO: not supported yet
          return [];
        }

        const prevoiousFullBeat = previousFullBeatsIndex(carry);
        console.log({ prevoiousFullBeat });
        const untouched = carry.slice(0, prevoiousFullBeat);
        const currentBeat = carry.slice(prevoiousFullBeat + 1);

        console.log({ untouched, currentBeat });

        return [...carry, lastStepTiming - timingToLength(timing), lastStep];
      },
      [] as number[]
    )
  ];
}
