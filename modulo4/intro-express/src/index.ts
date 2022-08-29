import express, { Request, Response } from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());



//Exercício 1
//app.get("/primeira-api", (req: Request, res: Response):any => {
 //res.send("Hello from Express");
//});


//Exercicio 2

type User = {
  id: number,
  name: string,
  phone: number,
  email: string
}
let userList:User[] = [
  {id:1, name:`Maria`, phone:5511123456789, email:`maria@email.com`},
  {id:2, name:`Paula`, phone:5511234567890, email:`paula@email.com`},
  {id:3, name:`Joana`, phone:5511345678901, email:`joana@email.com`}
]




app.get("/users", (req: Request, res: Response): void => {
  res.send(users);
});
