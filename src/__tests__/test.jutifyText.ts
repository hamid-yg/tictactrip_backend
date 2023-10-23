import { describe, it, expect } from "@jest/globals";
import { justifyText } from "../utils/justify.utils";

describe("justifyText", () => {
    it("should return an empty string for an empty input", () => {
      const input = "";
      const expected = "";
      const actual = justifyText(input);
      expect(actual).toEqual(expected);
    });

    it("should return the input string if it's shorter than the line length", () => {
      const input = "Hello world";
      const expected = "Hello world";
      const actual = justifyText(input);
      expect(actual).toEqual(expected);
    });

    it("should justify multiple lines of text", () => {
      const input = "Hello world\nThis is a test";
      const expected = "Hello world This is a test";
      const actual = justifyText(input);
      expect(actual).toEqual(expected);
    });
});
