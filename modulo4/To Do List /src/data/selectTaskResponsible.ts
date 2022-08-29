import { connection } from "./baseDatabase"

const selectTaskResponsible = async (userId: number) => {
    const result = await connection
        .select("*")
        .from("TodoListResponsibleUserTaskRelation")
        .where("responsible_user_id", userId)

    return result
}

export default selectTaskResponsible