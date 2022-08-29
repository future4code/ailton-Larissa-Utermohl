import { Request, Response } from "express"
import selectTaskByTitleOrDescriptionQuery from "../data/selectTaskByTitleOrDescriptionQuery"

const searchTaskByTitleOrDescription = async (req: Request, res: Response) => {

    try {
        const termo = req.query.termo as string

        if (!termo) {
            return res.status(400).send({
                message: "Passe uma query"
            })
        }

        const tasks = await selectTaskByTitleOrDescriptionQuery(termo)

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

export default searchTaskByTitleOrDescription