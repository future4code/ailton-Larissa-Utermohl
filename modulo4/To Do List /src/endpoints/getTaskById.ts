import { Request, Response } from "express"
import selectTaskById from "../data/selectTaskById"

const getTaskById = async (req: Request, res: Response) => {

    try {

        const { id } = req.params

        if (!id) {
            res.statusCode = 400
            throw new Error("Preencha o campo id")
        }

        const task = await selectTaskById(Number(id))

        if (!task[0]) {
            res.statusCode = 404
            throw new Error("Task not found")
        }

        res.status(200).send(task[0])
    }
    catch (error: any) {
        if (res.statusCode == 200) {
            res.status(500).send(error.message)
        } else {
            res.status(res.statusCode).send(error.message)
        }
    }
}

export default getTaskById