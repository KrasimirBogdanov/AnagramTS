import express from "express";
import words from "./WordList.json";
const app = express();
const port = 3000;

const sorting = (stringg) => {
  return stringg.split("").sort().join("");
};

const inputString: string = sorting("melon");
//let inputStringLength: number = inputString.length;

app.get("/", (req, res) => {
  const wordListLenght = words.length;
  const matchedWords: string[] = [];
  for (let i = 0; i < wordListLenght; i++) {
    if (inputString === sorting(words[i])) {
      matchedWords.push(words[i]);
    }
  }
  res.send(matchedWords);
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
