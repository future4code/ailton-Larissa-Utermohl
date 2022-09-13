import { connection } from "./baseDatabase"

const deleteUser = async (userId: number) => {
    await connection("TodoListUser")
        .where("id", userId)
        .delete()
}

export default deleteUser