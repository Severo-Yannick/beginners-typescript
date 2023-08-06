import { expect, it } from "vitest";
import { addTwoNumbers as addTwoNumbers1 } from "./object-param.solution.1";
import { addTwoNumbers as addTwoNumbers2 } from "./object-param.solution2";

it("Should add the two numbers with solution 1", () => {
  expect(addTwoNumbers1({ first: 2, second: 4 })).toEqual(6);
  expect(addTwoNumbers1({ first: -10, second: 10 })).toEqual(0);
  expect(addTwoNumbers1({ first: -1.45, second: 10.34 })).toEqual(8.89);
});

it("Should add the two numbers with solution 2", () => {
  expect(addTwoNumbers2({ first: 2, second: 4 })).toEqual(6);
  expect(addTwoNumbers2({ first: -10, second: 10 })).toEqual(0);
  expect(addTwoNumbers2({ first: -1.45, second: 10.34 })).toEqual(8.89);
});
