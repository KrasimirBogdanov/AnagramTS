import { Anagram } from "./anagram";

const wordToCheck = new Anagram("melon");
export const result = wordToCheck.checkIsFirstWordAnagram();

console.log(
  "Matched words are: " + result
);
