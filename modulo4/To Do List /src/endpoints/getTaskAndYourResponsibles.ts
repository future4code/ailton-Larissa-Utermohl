import { Request, Response } from "express"
import selectResponsiblesByTask from "../data/selectResponsiblesByTask"
import selectTaskById from "../data/selectTaskById"

const getTaskAndYourResponsibles =  async (req: Request, res: Response) => {

    try {

        const { id } = req.params

        if (!id) {
            res.statusCode = 400
            throw new Error("Preencha o campo id")
        }

        const task = await selectTaskById(Number(id))

        const responsible = await selectResponsiblesByTask(Number(id))


        if (!task[0]) {
            res.statusCode = 404
            throw new Error("Task not found")
        }

        const taskWithResponsible = {...task[0], responsibleUsers: responsible}


        res.status(200).send(taskWithResponsible)
    }
    catch (error: any) {
        if (res.statusCode == 200) {
            res.status(500).send(error.message)
        } else {
            res.status(res.statusCode).send(error.message)
        }
    }
}

export default getTaskAndYourResponsibles