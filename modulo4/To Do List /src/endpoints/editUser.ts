import { Request, Response } from "express"
import { connection } from "../data/baseDatabase"
import selectUserById from "../data/selectUserById"
import updateUser from "../data/updateUser"

const editUser = async (req: Request, res: Response) => {

    try {

        const { id } = req.params
        const { name, nickname } = req.body

        if (!name || !nickname) {
            res.statusCode = 400
            throw new Error("Fill all fields")
        }

        const user = await selectUserById(Number(id))

        if (!user[0]) {
            res.statusCode = 404
            throw new Error("User not found")
        }

        await updateUser(Number(id), name, nickname)

        res.status(200).send("User updated with success")
    }
    catch (error: any) {
        if (res.statusCode == 200) {
            res.status(500).send(error.message)
        } else {
            res.status(res.statusCode).send(error.message)
        }
    }
}

export default editUser