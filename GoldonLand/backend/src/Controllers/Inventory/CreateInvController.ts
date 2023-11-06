import { Request, Response } from "express"
import { CreateInvService } from "../../Services/Inventory/CreateinvService"

export class CreateInvController {
    async handle(req: Request, res: Response) {
        const {
            categoryId, name, description, strength,
            accuracy, defense, ac_crit,
            mp_damage, quantity, userId
        } = req.body
        const create = new CreateInvService()
        const response = await create.execute({
            categoryId, name, description, strength,
            accuracy, defense, ac_crit,
            mp_damage, quantity, userId
        })
        return res.json(response)
    }
}