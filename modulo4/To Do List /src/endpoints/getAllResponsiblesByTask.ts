import { Request, Response } from "express"
import selectResponsiblesByTask from "../data/selectResponsiblesByTask"

const getAllResponsiblesByTask =  async (req: Request, res: Response) => {

    try {

        const { id } = req.params

        if (!id) {
            res.statusCode = 400
            throw new Error("Field id is required")
        }

        if (!Number(id)) {
            res.statusCode = 400
            throw new Error("Field id must be a number")
        }


        const responsible = await selectResponsiblesByTask(Number(id))

        if (!responsible[0]) {
            res.statusCode = 404
            throw new Error("Task not found or no responsible user")
        }

        res.status(200).send({ users: responsible })
    }
    catch (error: any) {
        if (res.statusCode == 200) {
            res.status(500).send(error.message)
        } else {
            res.status(res.statusCode).send(error.message)
        }
    }
}

export default getAllResponsiblesByTask