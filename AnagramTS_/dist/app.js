"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const WordList_json_1 = __importDefault(require("./WordList.json"));
const app = (0, express_1.default)();
const port = 3000;
app.get("/", (req, res) => {
    res.send(`<b>${WordList_json_1.default}</b>`);
});
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map