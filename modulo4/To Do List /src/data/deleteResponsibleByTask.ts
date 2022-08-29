import { connection } from "./baseDatabase"

const deleteResponsibleByTask = async (taskId: number, responsibleUserId: number) => {

    const result = await connection
            .delete()
            .from("TodoListResponsibleUserTaskRelation")
            .where("task_id", taskId)
            .andWhere("responsible_user_id", responsibleUserId)

    return result
}

export default deleteResponsibleByTask
        