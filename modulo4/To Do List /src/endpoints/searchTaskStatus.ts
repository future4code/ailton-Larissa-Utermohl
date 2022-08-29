import { Request, Response } from "express"
import selectTaskByStatusQuery from "../data/selectTaskByStatusQuery"

const searchTaskStatus = async (req: Request, res: Response) => {

    try {
        const status: string = req.query.status as string

        if (!status) {
            res.statusCode = 400
            throw new Error("Preencha o campo status")
        }

        const tasks = await selectTaskByStatusQuery(status)

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

export default searchTaskStatus