import { Request, Response } from 'express'
import selectUserById from '../data/selectUserById'

const getUserById = async (req: Request, res: Response) => {

    try {

        const { id } = req.params

        const user = await selectUserById(Number(id))

        if (!user[0]) {
            res.statusCode = 404
            throw new Error("User not found")
        }

        res.status(200).send(user[0])
    }
    catch (error: any) {
        if (res.statusCode == 200) {
            res.status(500).send(error.message)
        } else {
            res.status(res.statusCode).send(error.message)
        }
    }
}

export default getUserById