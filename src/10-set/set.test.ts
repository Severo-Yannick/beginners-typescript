import { expect, it } from "vitest";
import { elementsOfNature } from "./set";

it("Should have valid elementsOfNature", () => {
  // Test positive cases
  expect(elementsOfNature).toHaveLength(6);
  expect(elementsOfNature).toBeTypeOf("object");

  expect(elementsOfNature).toContain(42);
  expect(elementsOfNature).toContain("Sun");
  expect(elementsOfNature).toContain("Moon");
  expect(elementsOfNature).toContain("Wind");
  expect(elementsOfNature).toContain("Rain");
  expect(elementsOfNature).toContain("Mountain");

  // Test negative cases
  expect(elementsOfNature).not.toContain("Fire");
  expect(elementsOfNature).not.toContain(456);
  expect(elementsOfNature).not.toContain(Array);
});
