import { connection } from "./baseDatabase"

const selectTaskByStatusQuery = async (status: string) => {

    const result = await connection
        .select("*")
        .from("TodoListTask")
        .where("status", status)

    return result
}

export default selectTaskByStatusQuery