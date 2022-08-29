import { Request, Response } from "express"
import selectAllUsers from "../data/selectAllUsers"

const getAllUsers = async (req: Request, res: Response) => {

    try {
        const users = await selectAllUsers()

        res.status(200).send({ users: users })
    }
    catch (error: any) {
        res.status(res.statusCode).send(error.message)
    }
}

export default getAllUsers