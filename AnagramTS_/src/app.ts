import express from "express";
import words from "./WordList.json";
const app = express();
const port = 3000;

const sorting = (stringg) => {
  return stringg.split("").sort().join("");
};

function fillMatchedWords() {
  const inputString: string = sorting("melon");
  const inputStringLength: number = inputString.length;

  const wordListLength = words.length;
  const matchedWordsList: string[] = [];

  for (let i = 0; i < wordListLength; i++) {
    if (inputStringLength === words[i].length) {
      if (inputString !== sorting(words[i])) continue;
      matchedWordsList.push(words[i]);
    }
  }
  return matchedWordsList;
}

app.get("/", (req, res) => {
  res.send(fillMatchedWords());
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
