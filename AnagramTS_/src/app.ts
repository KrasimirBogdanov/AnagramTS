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
  // res.send(`<b>${words}</b>`);
  for (let i = 0; i < wordListLenght; i++) {
    if (inputString === sorting(words[i])) {
      res.send(`<br>${words[i]}`);
    }
    //throw new Error("Do not match!");
    //res.send(`<b>${words}</b>`);
    console.log(sorting(words[i]));
  }
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
