import express from 'express'
import cors from 'cors'
import { AddressInfo } from 'net'
import createUser from './endpoints/createUser'
import getUserById from './endpoints/getUserById'
import editUser from './endpoints/editUser'
import createTask from './endpoints/createTask'
import getTaskById from './endpoints/getTaskById'
import getAllUsers from './endpoints/getAllUsers'
import getAllTasksCreatedByUser from './endpoints/getAllTasksCreatedByUser'
import searchUser from './endpoints/searchUser'
import createResponsiblesForTasks from './endpoints/createResponsiblesForTasks'
import getAllResponsiblesByTask from './endpoints/getAllResponsiblesByTask'
import getTaskAndYourResponsibles from './endpoints/getTaskAndYourResponsibles'
import editTasksState from './endpoints/editTasksState'
import searchTaskStatus from './endpoints/searchTaskStatus'
import getDelayedTasks from './endpoints/getDelayedTasks'
import removeResponsibleUserByTask from './endpoints/removeResponsibleUserByTask'
import searchTaskByTitleOrDescription from './endpoints/searchTaskByTitleOrDescription'
import removeTask from './endpoints/removeTask'
import removeUser from './endpoints/removeUser'

// Middlewares
const app = express()
app.use(cors())
app.use(express.json())

// 8. Pesquisar usuário
app.get("/user", searchUser)

// 1. Criar usuário
app.post("/user", createUser)

// 6. Pegar todos os usuários
app.get("/user/all", getAllUsers)

// 2. Pegar um usuário
app.get("/user/:id", getUserById)

// 20. Deletar um usuário
app.delete("/user/:id", removeUser)

// 3. Editar um usuário
app.put("/user/edit/:id", editUser)

// 7. Pegar todas as tarefas criadas por um usuário
app.get("/task", getAllTasksCreatedByUser)

// 4. Criar Tarefa
app.post("/task", createTask)

// 13. Pegar tarefas pelo status
app.get("/task/search", searchTaskStatus)

// 17. Procurar tarefa por termo
app.get("/task/query", searchTaskByTitleOrDescription)

// 9. Atribuir uma tarefa a um usuário (refatoração 16.)
app.post("/task/responsible", createResponsiblesForTasks)

// 14. Pegar tarefas atasadas 
app.get("/task/delayed", getDelayedTasks)

// 5. Pegar uma tarefa
app.get("/task/:id", getTaskById)

// 19. Deletar uma tarefa
app.delete("/task/:id", removeTask)

// 11. Consultar tarefa e seus responsaveis
app.get("/task/:id/responsiblesTask", getTaskAndYourResponsibles)

//12. Atualizar status da tarefa (refatoração 18.)
app.put("/task/status/edit", editTasksState)

// 15. Retirar um usuário responsável de uma tarefa
app.delete("/task/:taskId/responsible/:responsibleUserId", removeResponsibleUserByTask)

// 10. Listar usuários responsáveis por uma tarefa
app.get("/task/:id/responsible", getAllResponsiblesByTask)

// Servidor
const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});