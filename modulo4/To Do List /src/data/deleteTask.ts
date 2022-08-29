import { connection } from "./baseDatabase"

const deleteTask = async (taskId: number) => {
    await connection("TodoListTask")
        .where("id", taskId)
        .delete()
}

export default deleteTask