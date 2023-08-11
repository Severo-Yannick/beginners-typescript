import { expect, it } from "vitest";
import { makeUserSolution } from "./fn-return-type-annotations.solution";

it("Should a valid user", () => {
  const user = makeUserSolution();
  
  expect(user.id).toBeTypeOf("number");
  expect(user.firstName).toBeTypeOf("string");
  expect(user.lastName).toBeTypeOf("string");
  expect(user.role).toBeTypeOf("string");
  expect(user.posts[0].id).toBeTypeOf("number");
  expect(user.posts[0].title).toBeTypeOf("string");
});
