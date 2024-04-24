import { Request, Response } from "express"
import { UsersServices } from "../Services/UsersServices"

export class UsersControllers {
    async CreateUsers(req: Request, res: Response) {
        const { nickname, email, pass } = req.body
        const services = new UsersServices
        const resposta = await services.CreateUsers({
            nickname, email, pass
        })
        return res.json(resposta)
    }
}