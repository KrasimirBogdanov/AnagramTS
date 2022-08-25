import express from "express";
import words from "./WordList.json";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send(`<b>${words}</b>`);
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
