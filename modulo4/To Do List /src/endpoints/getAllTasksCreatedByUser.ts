import { Request, Response } from "express"
import selectTasksCreatedByUser from "../data/selectTasksCreatedByUser"

const getAllTasksCreatedByUser = async (req: Request, res: Response) => {

    try {
        const creatorUserId: number = Number(req.query.creatorUserId)

        if (!creatorUserId) {
            res.statusCode = 400
            throw new Error("Preencha o campo creatorUserId")
        }

        const tasks = await selectTasksCreatedByUser(creatorUserId)
        
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

export default getAllTasksCreatedByUser