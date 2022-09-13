import { Request, Response } from "express"
import selectDelayedTasks from "../data/selectDelayedTasks"

const getDelayedTasks = async (req: Request, res: Response) => {

    try {

        // lembrar da observação 1
        const tasks = await selectDelayedTasks()

            if (tasks.length == 0) {
                res.status(200).send("No tasks found")
            }

        res.status(200).send({ tasks: tasks })
    }
    catch (error: any) {
        if (res.statusCode == 200) {
            res.status(500).send(error.message)
        } else {
            res.status(res.statusCode).send(error.message)
        }
    }
}

export default getDelayedTasks