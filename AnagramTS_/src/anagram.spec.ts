import { Anagram } from "./anagram";

describe("testing anagram", () => {
  test('inputed word "melon" should matched 4 words ', () => {
    const melonToCheck = new Anagram("melon");
    expect(melonToCheck.checkIsFirstWordAnagram().length).toBe(4);
  });
});
