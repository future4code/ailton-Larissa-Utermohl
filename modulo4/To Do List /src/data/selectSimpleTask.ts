import { connection } from "./baseDatabase"

const selectSimpleTask = async (taskId: number[]) => {
    const result = await connection
            .select("*")
            .from("TodoListTask")
            .whereIn("id", taskId)

    return result
}

export default selectSimpleTask