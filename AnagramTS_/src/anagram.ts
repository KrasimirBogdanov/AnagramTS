import words from "./WordList.json";

const sorting = (stringToSort: string) => {
  return stringToSort.split("").sort().join("");
};

const inputString: string = sorting("melon");
const inputStringLength: number = inputString.length;
const matchedWordsList: string[] = [];

export function checkIsFirstWordAnagram() {
  words.forEach((word) => {
    if (inputStringLength === word.length) {
      if (inputString !== sorting(word)) return;
      matchedWordsList.push(word);
    }
    checkIsSecondWordAnagram(word);
  });
  return matchedWordsList;
}

export function checkIsSecondWordAnagram(firstWord: string) {
  words.forEach((scdWord) => {
    const concatenatedWordsLength: number = firstWord.length + scdWord.length;
    if (inputStringLength !== concatenatedWordsLength) return;
    const concatenatedWordsSorted: string = sorting(firstWord + scdWord);
    if (inputString !== concatenatedWordsSorted) return;
    matchedWordsList.push(firstWord + " + " + scdWord);
  });
}

console.log("Matched words are: " + checkIsFirstWordAnagram());
