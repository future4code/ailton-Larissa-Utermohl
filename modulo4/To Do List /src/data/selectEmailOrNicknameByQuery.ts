import { connection } from "./baseDatabase"

const selectEmailOrNicknameByQuery = async (query: string) => {
    const result = await connection
            .select("*")
            .from("TodoListUser")
            .where("nickname", "like", `%${query}%`)
            .orWhere("email", "like", `%${query}%`)

    return result
}

export default selectEmailOrNicknameByQuery
