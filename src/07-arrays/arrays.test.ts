import { expect, it } from "vitest";
import { defaultUser } from "./arrays.solution1";

it("Should a valid user", () => {
  const user = defaultUser;

  expect(user.id).toBeTypeOf("number");
  expect(user.firstName).toBeTypeOf("string");
  expect(user.lastName).toBeTypeOf("string");
  expect(user.role).toBeTypeOf("string");
  expect(user.posts[0].id).toBeTypeOf("number");
  expect(user.posts[0].title).toContain("How I eat so much cheese");
  expect(user.posts[0].title).toBeTypeOf("string");
});
