import { Request, Response } from "express"
import { CriarUserService } from "../../Services/Users/CriarUserService"

export class CriarUserController {
    async handle(req: Request, res: Response) {
        const { nome, email, senha } = req.body
        const criar = new CriarUserService()
        const response = await criar.execute({
            nome,
            email,
            senha
        })
        return res.json(response)
    }
}