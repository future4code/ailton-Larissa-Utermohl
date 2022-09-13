import { connection } from "./baseDatabase"

const deleteUserByIdFromRelation = async (userId: number) => {
    await connection
    .delete()
    .from("TodoListResponsibleUserTaskRelation")
    .where("responsible_user_id", userId)
}

export default deleteUserByIdFromRelation