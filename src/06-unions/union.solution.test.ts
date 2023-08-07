import { expect, it } from "vitest";
import { defaultUser } from "./unions.solution";

it("Should get the user role", () => {
  expect(defaultUser.role).toEqual("admin");
});
