import { Request, Response } from "express"
import deleteResponsibleByTask from "../data/deleteResponsibleByTask"

const removeResponsibleUserByTask = async (req: Request, res: Response) => {

    try {

        const { taskId, responsibleUserId } = req.params

        if (!taskId || !responsibleUserId) {
            res.statusCode = 400
            throw new Error("Fill all fields")
        }

        const responsible = await deleteResponsibleByTask(Number(taskId), Number(responsibleUserId))

        if (!responsible) {
            res.statusCode = 404
            throw new Error("Task not found")
        }

        res.status(200).send("Task updated with success")
    }
    catch (error: any) {
        if (res.statusCode == 200) {
            res.status(500).send(error.message)
        } else {
            res.status(res.statusCode).send(error.message)
        }
    }
}

export default removeResponsibleUserByTask