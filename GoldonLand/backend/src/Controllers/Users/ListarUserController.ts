import { Request, Response } from "express"
import { ListarUserService } from "../../Services/Users/ListarUserService"

export class ListarUserController {
    async handle(req: Request, res: Response) {
        const listar = new ListarUserService()
        const response = await listar.execute()
        return res.json(response)
    }
}