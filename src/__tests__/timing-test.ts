import { timingsToNumber, Timing } from "../types/timing";

describe("timingsToNumber", () => {
  describe("simple timings", () => {
    it.each`
      timing     | expected
      ${"Slow"}  | ${[1, 3, 5, 7, 9]}
      ${"Quick"} | ${[1, 2, 3, 4, 5]}
      ${"And"}   | ${[1, 1.5, 2, 2.5, 3]}
      ${"E"}     | ${[1, 1.25, 1.5, 1.75, 2]}
    `("returns $expected with $timing", ({ timing, expected }) => {
      expect(timingsToNumber([timing, timing, timing, timing])).toEqual(
        expected
      );
    });
  });

  describe("Mix of Timings", () => {
    it.each`
      timings                                | expected
      ${["Slow", "Quick", "Slow"]}           | ${[1, 3, 4, 6]}
      ${["Quick", "Slow", "Quick"]}          | ${[1, 2, 4, 5]}
      ${["Slow", "Quick", "Quick"]}          | ${[1, 3, 4, 5]}
      ${["Slow", "And", "Quick"]}            | ${[1, 2.5, 3, 4]}
      ${["Slow", "E", "Quick"]}              | ${[1, 2.75, 3, 4]}
      ${["Slow", "And", "E", "Quick"]}       | ${[1, 2.5, 2.75, 3, 4]}
      ${["Slow", "E", "And", "E", "Quick"]}  | ${[1, 2.25, 2.5, 2.75, 3, 4]}
      ${["Quick", "E", "And", "E", "Quick"]} | ${[1, 1.25, 1.5, 1.75, 2, 3]}
    `("returns $expected with $timings", ({ timings, expected }) => {
      expect(timingsToNumber(timings)).toEqual(expected);
    });
  });

  it.only("does it", () => {
    expect(timingsToNumber(["And", "And", "And"] as Timing[])).toEqual([
      1,
      1.5,
      2
    ]);
  });
});
