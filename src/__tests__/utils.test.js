// src/__tests__/utils.test.js

import { pointsForWord } from "../utils";

describe("pointsForWord", () => {
  it("calculates the total points for a word (1 point per vowel, 2 per consonant)", () => {
    const word = "test";
    const points = pointsForWord(word);
    expect(points).toBe(7); // t=2, e=1, s=2, t=2
  });

  it("handles uppercase and lowercase input", () => {
    const word = "tEsT";
    const points = pointsForWord(word);
    expect(points).toBe(7); // t=2, E=1, s=2, T=2
  });

  it("returns 0 for an empty string", () => {
    const word = "";
    const points = pointsForWord(word);
    expect(points).toBe(0);
  });

  it("handles words with only vowels", () => {
    const word = "aeiou";
    const points = pointsForWord(word);
    expect(points).toBe(5); // 1 point each
  });

  it("handles words with only consonants", () => {
    const word = "bcdfg";
    const points = pointsForWord(word);
    expect(points).toBe(10); // 2 points each
  });

  it("treats numbers and symbols as consonants", () => {
    const word = "h3ll0!";
    const points = pointsForWord(word);
    expect(points).toBe(12); // h=2, 3=2, l=2, l=2, 0=2, !=2
  });

  it("returns 0 if input is not a string", () => {
    const points = pointsForWord(12345); // Not a string
    expect(points).toBe(0);
  });
  
});

