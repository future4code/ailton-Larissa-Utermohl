import express, { Request, Response } from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());


//Exercicio1
app.get("/ping", (req, res) => {          
  res.send("Pong! 🏓")
})


//Exercicio2

type ToDo = {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}
let toDoList: ToDo[] = [
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


// // Exercício 3

//Endpoint de pegar lista de afazeres por usuário selecionado.
 app.get("/todos/user/:userId", (
  req: Request,
  res: Response
) => {
  const userId: number = Number(req.params.userId);

  // Condicional que verifica se a informação fornecida pelo client é válida (um número em formato string).
  if (!userId) {
      // Encerramento da requisição pelo return.
      return res.status(400).send({
          message: "Id de usuário inválido"
      });
  };

  // Variável userToDoList -> Lista todos os afazeres do usuário, buscando pelo seu id.
  const userToDoList = toDoList.filter((toDo) => {
      return toDo.userId === userId;
  });

  res.status(200).send({
      toDos: userToDoList
  });
});

Exercício 4

// Endpoint de criar um novo afazer.
app.post("/todos", (req: Request, res: Response) => {
    // Entradas de informações do novo afazer, com desestruturação.
    // Observação: id do novo afazer será criado pelo próprio endpoint.
    const { userId, title } = req.body;

    // Condicional que verifica se userId e/ou title foram enviados pelo client.
    if (!userId || !title) {
        // Encerramento da requisição pelo return.
        return res.status(400).send({
            message: "É preciso passar os parâmetros de userId e title."
        });
    };

    // Variável newToDo -> Objeto que representa o novo afazer.
    // Date.now() -> Gera um número inteiro que representa a quantidade de milissegundos decorridos desde o primeiro milissegundo do dia 01/01/1970.
    const newToDo: ToDo = {
        userId,
        id: Date.now(),
        title,
        completed: false
    };

    // Atualização da lista de afazeres toDoList.
    toDoList.push(newToDo);

    // Resposta em formato de objeto, com as propriedades message e list.
    res.status(201).send({
        message: "Criado com sucesso!",
        toDos: toDoList
    });
});

//Exercício 5

// Endpoint que altera o status de um afazer pelo seu id.
app.put("/todos/:id", (req: Request, res: Response) => {
    // Entrada do id do afazer.
    const idToDo = Number(req.params.id);

    // Condicional que verifica se a informação fornecida pelo client é válida (um número em formato string).
    if (!idToDo) {
        // Encerramento da requisição pelo return.
        return res.status(400).send({
            message: "Id do afazer inválido"
        });
    };

    // Variável list -> Atualiza o status do afazer armazenado em toDoList.
    const list = toDoList.map((toDo) => {
        if (toDo.id === idToDo) {
            toDo.completed = !toDo.completed;
        };

        return toDo;
    });

    // Resposta em formato de objeto, com as propriedades message e list.
    res.status(201).send({
        message: "Atualizado com sucesso!",
        toDo: list
    });
});

//Exercício 6

// Endpoint que remove um afazer da lista.
app.delete("/todos/:id", (req: Request, res: Response) => {
    const idToDo = Number(req.params.id);

    // Condicional que verifica se a informação fornecida pelo client é válida (um número em formato string).
    if (!idToDo) {
        // Encerramento da requisição pelo return.
        return res.status(400).send({
            message: "Id do afazer inválido"
        });
    };

    // Variável newList -> Filtra toDoList, removendo o afazer escolhido.
    const newList = toDoList.filter((toDo) => {
        return toDo.id !== idToDo;
    });

    // Atualiza toDoList para utilização em outros endpoints.
    toDoList = newList;

    res.status(200).send({
        message: "Afazer deletado com sucesso!"
    });
});

//Exercício 7

// Endpoint de pegar lista de afazeres, por status ou não.
app.get("/todos", (
    req: Request,
    res: Response
) => {
    // Variável completed -> Recebe a query opcional.
    // Observação: Como esta é uma informação opcional, o client pode ou não enviá-la.
    const completed = req.query.status as string;

    if (!completed) {
        // Encerramento da requisição pelo return.
        return res.status(200).send({
            toDos: toDoList
        });
    };

    // filterToDos -> Retorna a lista de afazeres, a depender da query status existir ou não.
    const filterToDos = toDoList.filter((toDo) => {
        /* Início de comentário multi-linha

            Se o client enviar um valor de status válido (true ou false) para a requisição,
            a lista de afazeres será filtrada pelo valor fornecido.
        
        Fim de comentário multi-linha */
        if (completed === "true" || completed === "false") {
            return toDo.completed.toString() === completed;
        };
    });

    res.status(200).send({
        toDos: filterToDos
    });
});

app.listen(3003, () => {
  console.log("Server is running in http://localhost:3003")
});