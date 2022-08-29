import { connection } from "./baseDatabase"

const selectDelayedTasks = async () => {
    
    const result = await connection
            .select("*")
            .from("TodoListTask")
            .where("limit_date", "<", new Date())

    return result
}

export default selectDelayedTasks