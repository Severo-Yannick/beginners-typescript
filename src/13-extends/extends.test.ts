import { expect, it } from "vitest";
import { Identifiable, User, Post, Comment } from "./extends.solution1";

it("Should have Identifiable", () => {
  function createIdentifiable(id: string): Identifiable {
    return { id };
  }
  const newIdentifiable = createIdentifiable("4");
  expect(newIdentifiable).toBeTypeOf("object");
  expect(newIdentifiable.id).toBeTypeOf("string");
});

it("Should have User", () => {
  function createUser(id: string, firstName: string, lastName: string): User {
    return { id, firstName, lastName };
  }

  const newUser = createUser("1", "John", "Doe");
  const { id, firstName, lastName } = newUser;

  expect(newUser).toBeTypeOf("object");
  expect(id).toBeTypeOf("string");
  expect(firstName).toBeTypeOf("string");
  expect(lastName).toBeTypeOf("string");
});

it("Should have Post", () => {
  function createPost(id: string, title: string, body: string): Post {
    return { id, title, body };
  }

  const newPost = createPost(
    "1",
    "Introduction to TypeScript",
    "TypeScript is a statically typed superset of JavaScript."
  );
  const { id, title, body } = newPost;

  expect(newPost).toBeTypeOf("object");
  expect(id).toBeTypeOf("string");
  expect(id).toBe("1");
  expect(title).toBeTypeOf("string");
  expect(title).toBe("Introduction to TypeScript");
  expect(body).toBeTypeOf("string");
  expect(body).toBe("TypeScript is a statically typed superset of JavaScript.");
});

it("Should have Comment", () => {
  function createComment(id: string, comment: string): Comment {
    return { id, comment };
  }

  const newComment = createComment(
    "1",
    "I love the introduction to TypeScript"
  );
  const { id, comment } = newComment;

  expect(newComment).toBeTypeOf("object");
  expect(id).toBeTypeOf("string");
  expect(id).toBe("1");
  expect(comment).toBeTypeOf("string");
  expect(comment).toBe("I love the introduction to TypeScript");
});
