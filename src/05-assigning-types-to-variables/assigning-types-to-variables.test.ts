import { expect, it } from "vitest";
import { getUserId, User } from "./assigning-types-to-variables";

const defaultUser: User = {
  id: 23,
  firstName: "John",
  lastName: "Doe",
  isAdmin: false,
};

it("Should get the user id", () => {
  expect(getUserId(defaultUser)).toEqual(defaultUser.id);
});
