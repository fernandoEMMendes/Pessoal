import { Request, Response } from "express"
import { LoginService } from "../../Services/Login/LoginService"

export class LoginController {
    async handle(req: Request, res: Response) {
        const { email, senha } = req.body
        const login = new LoginService()
        const response = await login.execute({
            email, senha
        })
        return res.json(response)
    }
}