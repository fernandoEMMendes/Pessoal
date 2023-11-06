import { Request, Response } from "express"
import { ListInvService } from "../../Services/Inventory/ListInvService"

export class ListInvController {
    async handle(req: Request, res: Response) {
        const list = new ListInvService()
        const response = await list.execute()
        return res.json(response)
    }
}