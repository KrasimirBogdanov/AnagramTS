"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const WordList_json_1 = __importDefault(require("./WordList.json"));
const app = (0, express_1.default)();
const port = 3000;
const sorting = (stringg) => {
    return stringg.split("").sort().join("");
};
const inputString = sorting("melon");
//let inputStringLength: number = inputString.length;
app.get("/", (req, res) => {
    const wordListLenght = WordList_json_1.default.length;
    const matchedWords = [];
    for (let i = 0; i < wordListLenght; i++) {
        if (inputString === sorting(WordList_json_1.default[i])) {
            matchedWords.push(WordList_json_1.default[i]);
        }
        //console.log("Matched word is: " + words[i]);
        //console.log(sorting(words[i]));
    }
    res.send(matchedWords);
});
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map