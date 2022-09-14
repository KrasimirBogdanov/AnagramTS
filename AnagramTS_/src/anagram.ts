//import express from "express";
import words from "./WordList.json";
//const app = express();
//const port = 3000;

const sorting = (stringg) => {
  return stringg.split("").sort().join("");
};

export function fillMatchedWords() {
  const inputString: string = sorting("melon");
  const inputStringLength: number = inputString.length;

  const wordListLength:number = words.length;
  const matchedWordsList: string[] = [];

  for (let i = 0; i < wordListLength; i++) {
   // console.log("I:"+i);
    if (inputStringLength == words[i].length) {
      if (inputString != sorting(words[i])) continue;
      matchedWordsList.push(words[i]);
    } else
      for (let j = 0; j < wordListLength; j++) {
        const nextWordOfListLength: number = words[j].length;
        /*console.log(
          "NextWordOfList: " + "i:" + i + " j:" + j + " is " + words[j]
        );*/
        const concatenatedWordsLength: number =
          words[i].length + nextWordOfListLength;
        if (inputStringLength != concatenatedWordsLength) continue;
        const concatenatedWordsSorted: string = sorting(words[i] + words[j]);
        if (inputString != concatenatedWordsSorted) continue;
        matchedWordsList.push(words[i] + " + " + words[j]);
      }
  }
 // console.log("Number of matched words are: " + matchedWordsList.length);
  return matchedWordsList;
}
console.log("Matched words are: " + fillMatchedWords());
/*
app.get("/", (req, res) => {
  res.send(`${fillMatchedWords()}`);
});


app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
*/