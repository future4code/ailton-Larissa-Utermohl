import { connection } from "./baseDatabase"

const selectIdResponsiblesForTask = async (task_id: number) => {
    const result = await connection
        .select("responsible_user_id")
        .from("TodoListResponsibleUserTaskRelation")
        .where("task_id", task_id)

    return result
}

export default selectIdResponsiblesForTask
