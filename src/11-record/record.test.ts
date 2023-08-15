import { expect, it } from "vitest";
import { createCache } from "./record";

it("Should add values to the cache", () => {
  const userCache = createCache();
  const user: string = "Toto";
  const userId: number = 1;

  // Test positive cases
  userCache.add(userId, user); // cache: { '1': 'Toto' }
  expect(userCache).toBeTypeOf("object");
  expect(userCache.cache[userId]).toEqual(user);

  // Test negative cases
  expect(userCache.cache[2]).toEqual(undefined);
});

it("Should remove values from the cache", () => {
  const userCache = createCache();
  const user: string = "Toto";
  const userId: number = 1;

  userCache.add(userId, user);
  userCache.remove(userId);

  expect(userCache.cache[userId]).toEqual(undefined);
});
