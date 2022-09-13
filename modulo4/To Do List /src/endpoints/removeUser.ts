import { Request, Response } from "express"
import deleteTaskByUserId from "../data/deleteTaskByUserId"
import deleteUser from "../data/deleteUser"
import deleteUserByIdFromRelation from "../data/deleteUserByIdFromRelation"
import selectTaskResponsible from "../data/SelectTaskResponsible"
import selectTasksCreatedByUser from "../data/selectTasksCreatedByUser"
import selectUserById from "../data/selectUserById"

const removeUser = async (req: Request, res: Response) => {

    try {

        const { id } = req.params

        const user = await selectUserById(Number(id))

        if (!user[0]) {
            res.statusCode = 404
            throw new Error("User not found")
        }

        const creator = await selectTasksCreatedByUser(Number(id))

        if (creator.length > 0) {
            await deleteTaskByUserId(Number(id))
        }

        const responsible = await selectTaskResponsible(Number(id))

        if (responsible.length > 0) {
            await deleteUserByIdFromRelation(Number(id))
        }


        await deleteUser(Number(id))

        res.status(200).send("User deleted with success")
    }
    catch (error: any) {
        if (res.statusCode == 200) {
            res.status(500).send(error.message)
        } else {
            res.status(res.statusCode).send(error.message)
        }
    }
}

export default removeUser