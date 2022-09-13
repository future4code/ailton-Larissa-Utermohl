import { connection } from "./baseDatabase"

const updateTaskState = async (status: string, task_id: number[]) => {

    await connection
            .update('status', status)
            .into("TodoListTask")
            .whereIn("id", task_id)
}

export default updateTaskState