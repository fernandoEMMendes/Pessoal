import { Request, Response } from "express"
import { CriarUserService } from "../../Services/Users/CriarUserService"

export class CriarUserController {
    async handle(req: Request, res: Response) {
        const { name, email, password } = req.body
        const criar = new CriarUserService()
        const response = await criar.execute({
            name,
            email,
            password
        })
        return res.json(response)
    }
}