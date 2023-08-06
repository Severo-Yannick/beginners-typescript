import { expect, it } from "vitest";
import { getName } from "./optional-params.solution";

it("Should work with just the first name", () => {
  expect(getName('John')).toEqual('John');
});

it("Should work with first and last name", () => {
  expect(getName('John', 'Doe')).toEqual('John Doe');
});