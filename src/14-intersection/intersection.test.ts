import { expect, it } from "vitest";
import { getDefaultUserAndPosts } from "./intersection.solution2";

it("Should a valid user", () => {
  const user = getDefaultUserAndPosts();

  expect(user.id).toBeTypeOf("string");
  expect(user.firstName).toBeTypeOf("string");
  expect(user.lastName).toBeTypeOf("string");
  expect(user.posts[0].id).toBeTypeOf("string");
  expect(user.posts[0].title).toContain("How I eat so much cheese");
  expect(user.posts[0].title).toBeTypeOf("string");
});
