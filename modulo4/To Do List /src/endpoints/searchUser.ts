import { Request, Response } from "express"
import selectEmailOrNicknameByQuery from "../data/selectEmailOrNicknameByQuery"

const searchUser = async (req: Request, res: Response) => {
    try {

        const query = req.query.query as string

        if (!query) {
            return res.status(400).send({
                message: "Passe uma query"
            })
        }

        const users = await selectEmailOrNicknameByQuery(query)


        return res.status(200).send(users)
    } catch (error: any) {
        if (res.statusCode == 200) {
            res.status(500).send(error.message)
        } else {
            res.status(res.statusCode).send(error.message)
        }
    }
}

export default searchUser