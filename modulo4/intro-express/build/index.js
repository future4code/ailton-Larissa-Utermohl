"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.get("/user", (req, res) => {
    res.send("usuarios");
});
let userList = [
    { id: 1, name: `Maria`, phone: 5511123456789, email: `maria@email.com` },
    { id: 2, name: `Paula`, phone: 5511234567890, email: `paula@email.com` },
    { id: 3, name: `Joana`, phone: 5511345678901, email: `joana@email.com` }
];
app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003/user");
});
