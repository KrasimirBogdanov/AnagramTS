import words from "./WordList.json";

const sorting = (stringg: string) => {
  return stringg.split("").sort().join("");
};

const inputString: string = sorting("melon");
const inputStringLength: number = inputString.length;
const matchedWordsList: string[] = [];

export function checkIsFirstWordAnagram() {
  for (const word of words) {
    if (inputStringLength === word.length) {
      if (inputString !== sorting(word)) continue;
      matchedWordsList.push(word);
    }
    checkIsSecondWordAnagram(word);
  }
 function checkIsSecondWordAnagram(firstWord: string) {
    for (const scdWord of words) {
      const concatenatedWordsLength: number = firstWord.length + scdWord.length;
      if (inputStringLength != concatenatedWordsLength) continue;
      const concatenatedWordsSorted: string = sorting(firstWord + scdWord);
      if (inputString != concatenatedWordsSorted) continue;
      matchedWordsList.push(firstWord + " + " + scdWord);
    }
  }

  return matchedWordsList;
}
console.log("Matched words are: " + checkIsFirstWordAnagram());
