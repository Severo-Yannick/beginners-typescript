import { expect, it } from "vitest";
import { fetchLukeSkywalker } from "./promises.solution3";

it("Should a valid fetchLukeSkywalker contain", async () => {
  const LukeSkywalker = await fetchLukeSkywalker();
  
  expect(LukeSkywalker.name).toBeTypeOf("number");
  expect(LukeSkywalker.height).toBeTypeOf("string");
  expect(LukeSkywalker.mass).toBeTypeOf("string");
  expect(LukeSkywalker.hair_color).toBeTypeOf("string");
  expect(LukeSkywalker.skin_color).toBeTypeOf("number");
  expect(LukeSkywalker.eye_color).toBeTypeOf("string");
  expect(LukeSkywalker.gender).toBeTypeOf("string");
});