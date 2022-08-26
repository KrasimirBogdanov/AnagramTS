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
function fillMatchedWords() {
    const inputString = sorting("melon");
    const inputStringLength = inputString.length;
    const wordListLenght = WordList_json_1.default.length;
    const matchedWordsList = [];
    for (let i = 0; i < wordListLenght; i++) {
        if (inputStringLength === WordList_json_1.default[i].length) {
            if (inputString !== sorting(WordList_json_1.default[i]))
                continue;
            matchedWordsList.push(WordList_json_1.default[i]);
        }
        console.log(WordList_json_1.default[i]);
    }
    return matchedWordsList;
}
app.get("/", (req, res) => {
    res.send(fillMatchedWords());
});
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map