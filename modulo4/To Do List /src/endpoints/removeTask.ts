import { Request, Response } from "express"
import deleteTask from "../data/deleteTask"
import deleteTaskByIdFromRelation from "../data/deleteTaskByIdFromRelation"
import selectIdResponsiblesForTask from "../data/selectIdResponsiblesForTask"
import selectTaskById from "../data/selectTaskById"

const removeTask = async (req: Request, res: Response) => {

    try {

        const { id } = req.params

        if (!id) {
            res.statusCode = 400
            throw new Error("field id is required")
        }

        const task = await selectTaskById(Number(id))

        if (!task[0]) {
            res.statusCode = 404
            throw new Error("Task not found")
        }

        const responsible = await selectIdResponsiblesForTask(Number(id))

        if (responsible.length > 0) {
            await deleteTaskByIdFromRelation(Number(id))
        }

        await deleteTask(Number(id))

        res.status(200).send("Task deleted with success")
    }
    catch (error: any) {
        if (res.statusCode == 200) {
            res.status(500).send(error.message)
        } else {
            res.status(res.statusCode).send(error.message)
        }
    }
}

export default removeTask