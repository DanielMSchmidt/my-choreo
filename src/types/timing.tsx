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
