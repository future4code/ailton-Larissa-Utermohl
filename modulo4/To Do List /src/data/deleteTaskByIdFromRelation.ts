import { connection } from "./baseDatabase"

const deleteTaskByIdFromRelation = async (taskId: number) => {
    await connection
    .delete()
    .from("TodoListResponsibleUserTaskRelation")
    .where("task_id", taskId)
}

export default deleteTaskByIdFromRelation