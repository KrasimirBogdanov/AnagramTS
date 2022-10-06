import words from "./WordList.json";

export class Anagram {
  private inputString: string;
  private inputedSortedString: string;
  private matchedWordsList: string[] = [];

  constructor(inputedString: string) {
    this.inputString = inputedString;
    this.inputedSortedString = this.sorting(this.inputString);
  }

  sorting = (stringToSort: string) => {
    return stringToSort.split("").sort().join("");
  };

  checkIsFirstWordAnagram() {
    words.forEach((firstWord) => {
      if (this.inputedSortedString.length === firstWord.length) {
        if (this.inputedSortedString !== this.sorting(firstWord)) return;
        this.matchedWordsList.push(firstWord);
      }
      this.checkIsSecondWordAnagram(firstWord);
    });
    return this.matchedWordsList;
  }

  checkIsSecondWordAnagram(firstWord: string) {
    words.forEach((secondWord) => {
      const concatenatedWordsLength: number =
        firstWord.length + secondWord.length;
      if (this.inputedSortedString.length !== concatenatedWordsLength) return;
      const concatenatedWordsSorted: string = this.sorting(
        firstWord + secondWord
      );
      if (this.inputedSortedString !== concatenatedWordsSorted) return;
      this.matchedWordsList.push(firstWord + " + " + secondWord);
    });
  }
}
