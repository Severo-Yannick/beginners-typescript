import { expect, it } from "vitest";
import { coerceAmount } from "./typeofNarrowing.solution";

it("Should coerce values to numbers", () => {
  const amoutNumber = coerceAmount(54);
  const amoutObject = coerceAmount({ amount: 54 });

  expect(amoutNumber).toBeTypeOf("number");
  expect(amoutObject).toBeTypeOf("number");
});
