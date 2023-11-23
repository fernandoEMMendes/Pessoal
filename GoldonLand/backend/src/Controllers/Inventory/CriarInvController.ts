import { Request, Response } from "express"
import { CriarInvService } from "../../Services/Inventory/CriarInvService"

export class CriarInvController {
    async handle(req: Request, res: Response) {
        const {
            categoryId, name, description, strength,
            accuracy, defense, ac_crit,
            mp_damage, quantity, userId
        } = req.body
        const criar = new CriarInvService()
        const response = await criar.execute({
            categoryId, name, description, strength,
            accuracy, defense, ac_crit,
            mp_damage, quantity, userId
        })
        return res.json(response)
    }
}