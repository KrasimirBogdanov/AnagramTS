import words from "./WordList.json";

const sorting = (stringg: string) => {
  return stringg.split("").sort().join("");
};

export function fillMatchedWords() {
  const inputString: string = sorting("melon");
  const inputStringLength: number = inputString.length;

  const matchedWordsList: string[] = [];

  for (const word of words) {
    if (inputStringLength === word.length) {
      if (inputString !== sorting(word)) continue;
      matchedWordsList.push(word);
    } else
      for (const scdWord of words) {
        const concatenatedWordsLength: number = word.length + scdWord.length;
        if (inputStringLength != concatenatedWordsLength) continue;
        const concatenatedWordsSorted: string = sorting(word + scdWord);
        if (inputString != concatenatedWordsSorted) continue;
        matchedWordsList.push(word + " + " + scdWord);
      }
  }

  return matchedWordsList;
}
console.log("Matched words are: " + fillMatchedWords());