import { wordToCheck } from "./anagram";

describe("testing anagram", () => {
  test('inputed word "melon" should matched 4 words ', () => {
    expect(wordToCheck.checkIsFirstWordAnagram().length).toBe(4);
  });
});
