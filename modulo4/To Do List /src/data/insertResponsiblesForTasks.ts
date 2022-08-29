import { NewResponsiblesForTasks } from "../types"
import { connection } from "./baseDatabase"

const insertResponsiblesForTasks = async (responsible: NewResponsiblesForTasks[]) => {

    await connection
            .insert(responsible)
            .into("TodoListResponsibleUserTaskRelation")
}

export default insertResponsiblesForTasks