import { Request, Response } from "express"
import { LoginServices } from "../Services/LoginServices"

export class LoginControllers {
    async LoginUsuarios(req: Request, res: Response) {
        const { email, password } = req.body
        const login = new LoginServices
        const resposta = await login.LoginUsuarios({
            email, password
        })
    }
}