import { expect, it } from "vitest";
import { getName as getName1 } from "./optional-properties.solution1";
import { getName as getName2 } from "./optional-properties.solution2";

const firstName = "John";
const lastName = "Doe";

// Solution 1
it("Should work with just the first name - Solution 1", () => {
  expect(getName1({ first: firstName })).toEqual(firstName);
});

it("Should work with the first and last name - Solution 1", () => {
  expect(getName1({ first: firstName, last: lastName })).toEqual(
    `${firstName} ${lastName}`
  );
});

// Solution 2
it("Should work with just the first name - Solution 2", () => {
  expect(getName2({ first: firstName })).toEqual(firstName);
});

it("Should work with the first and last name - Solution 2", () => {
  expect(getName2({ first: firstName, last: lastName })).toEqual(
    `${firstName} ${lastName}`
  );
});
