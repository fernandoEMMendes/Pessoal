import { Request, Response } from "express"
import { ListUserService } from "../../Services/Users/ListUserService"

export class ListUserController {
    async handle(req: Request, res: Response) {
        const list = new ListUserService()
        const response = await list.execute()
        return res.json(response)
    }
}