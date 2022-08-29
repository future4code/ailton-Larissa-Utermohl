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
//Exercicio1
app.get("/ping", (req, res) => {
    res.send("Pong! 🏓");
});
let toDoList = [
    {
        userId: 1,
        id: 1,
        title: "Limpar casa",
        completed: true
    },
    {
        userId: 1,
        id: 2,
        title: "Estudar",
        completed: false
    },
    {
        userId: 2,
        id: 3,
        title: "Cortar cabelo",
        completed: true
    },
    {
        userId: 2,
        id: 4,
        title: "Lavar roupa",
        completed: false
    },
    {
        userId: 3,
        id: 5,
        title: "Se exercitar",
        completed: true
    },
    {
        userId: 3,
        id: 6,
        title: "Cozinhar",
        completed: false
    },
];
app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});
// // Exercício 3
// // Endpoint de pegar lista de afazeres por usuário selecionado.
// app.get("/todos/user/:userId", (
//   req: Request,
//   res: Response
// ) => {
//   const userId: number = Number(req.params.userId);
//   // Condicional que verifica se a informação fornecida pelo client é válida (um número em formato string).
//   if (!userId) {
//       // Encerramento da requisição pelo return.
//       return res.status(400).send({
//           message: "Id de usuário inválido"
//       });
//   };
//   // Variável userToDoList -> Lista todos os afazeres do usuário, buscando pelo seu id.
//   const userToDoList = toDoList.filter((toDo) => {
//       return toDo.userId === userId;
//   });
//   res.status(200).send({
//       toDos: userToDoList
//   });
// });
