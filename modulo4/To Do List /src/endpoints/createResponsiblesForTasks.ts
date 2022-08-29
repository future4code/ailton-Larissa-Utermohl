import { Request, Response } from "express"
import insertResponsiblesForTasks from "../data/insertResponsiblesForTasks"
import selectIdResponsiblesForTask from "../data/selectIdResponsiblesForTask"

const createResponsiblesForTasks = async (req: Request, res: Response) => {

    try {

        const { task_id } = req.body
        const responsible_user_id: number[]  = req.body.responsible_user_id

        if (!task_id) {
            res.statusCode = 400
            throw new Error("fild task_id is required")
        }
        
        if (!responsible_user_id) {
            res.statusCode = 400
            throw new Error("fild responsible_user_id is required")
        }

        const responsible = responsible_user_id.map( (id: number) => (
            {
                responsible_user_id: id,
                task_id
            }
        ))


        const list = await selectIdResponsiblesForTask(task_id)

        for (let number of responsible) {
            if (list.find(item => item.responsible_user_id == number.responsible_user_id)) {
                res.statusCode = 409
                throw new Error("User already assigned")
            }
        }
        

        await insertResponsiblesForTasks(responsible)

        res.status(201).send("Task assigned with success")

    }
    catch (error: any) {
        if (res.statusCode == 200) {
            res.status(500).send(error.message)
        } else {
            res.status(res.statusCode).send(error.message)
        }
    }
}

export default createResponsiblesForTasks