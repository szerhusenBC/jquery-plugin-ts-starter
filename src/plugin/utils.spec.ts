import {isNullOrUndefined} from "./utils";

describe("Utils - isNullOrUndefined", () => {
   it("should by true for value is null", () => {
      expect(isNullOrUndefined(null)).toBe(true);
   });

   it("should by true for value is undefined", () => {
      expect(isNullOrUndefined(undefined)).toBe(true);
   });

   it("should by false for value is object", () => {
      expect(isNullOrUndefined({foo: "bar"})).toBe(false);
   });

   it("should by false for value is primitive", () => {
      expect(isNullOrUndefined(4711)).toBe(false);
   });
});