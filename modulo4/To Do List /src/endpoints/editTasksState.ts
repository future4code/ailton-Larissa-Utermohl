import { Request, Response } from "express"
import selectSimpleTask from "../data/selectSimpleTask"
import updateTaskState from "../data/updateTaskState"

const editTasksState = async (req: Request, res: Response) => {

    try {

        const { status } = req.body
        const task_id: number[] = req.body.task_id

        if (!status) {
            res.statusCode = 400
            throw new Error("fild status is required")
        }

        if (!task_id) {
            res.statusCode = 400
            throw new Error("fild task_id is required")
        }

        const tasks = await selectSimpleTask(task_id)

        if (tasks.length == 0) {
            res.statusCode = 404
            throw new Error("Task not found")
        }

        for (let task of tasks) {
            if (task.status == status) {
                res.statusCode = 409
                throw new Error("Task already has this status")
            }
        }

        await updateTaskState(status, task_id)


        res.status(200).send("Task status updated with success")
    }
    catch (error: any) {
        if (res.statusCode == 200) {
            res.status(500).send(error.message)
        } else {
            res.status(res.statusCode).send(error.message)
        }
    }
}

export default editTasksState