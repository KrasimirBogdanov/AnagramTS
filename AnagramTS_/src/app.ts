import { Anagram } from "./anagram";
export { wordToCheck };

const wordToCheck = new Anagram("melon");

console.log(
  "Matched words are: " + wordToCheck.checkIsFirstWordAnagram()
);
