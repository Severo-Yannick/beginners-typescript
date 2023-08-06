import { expect, it } from "vitest";
import { addTwoNumbers } from "./number.solution";

it("Should add the two numbers", () => {
  expect(addTwoNumbers(2, 4)).toEqual(6);
  expect(addTwoNumbers(-10, 10)).toEqual(0);
  expect(addTwoNumbers(-1.45, 10.34)).toEqual(8.89);
});
