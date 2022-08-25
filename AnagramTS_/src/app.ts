import express from "express";
import words from "./WordList.json";
const app = express();
const port = 3000;

let inputString: string;
let inputStringLength: number;


app.get("/", (req, res) => {
  const wordListLenght = words.length;
 // res.send(`<b>${words}</b>`);
  res.send(`<br>${wordListLenght}`);
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
