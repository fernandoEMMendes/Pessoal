import { Request, Response } from "express"
import { ListarInvService } from "../../Services/Inventory/ListarInvService"

export class ListarInvController {
    async handle(req: Request, res: Response) {
        const listar = new ListarInvService()
        const response = await listar.execute()
        return res.json(response)
    }
}