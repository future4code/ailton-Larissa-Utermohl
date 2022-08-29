import { connection } from "./baseDatabase"

const selectTaskByTitleOrDescriptionQuery = async (termo: string) => {

    const result = await connection
            .select("TodoListTask.id as task_id", "TodoListTask.title", "TodoListTask.description", "TodoListTask.limit_date", "TodoListTask.status", "TodoListUser.id as creator_id", "TodoListUser.nickname as creator_nickname")
            .from("TodoListTask")
            .innerJoin("TodoListUser", "TodoListUser.id", "TodoListTask.creator_user_id")
            .where("TodoListTask.title", "like", `%${termo}%`)
            .orWhere("TodoListTask.description", "like", `%${termo}%`)

    return result
}

export default selectTaskByTitleOrDescriptionQuery

