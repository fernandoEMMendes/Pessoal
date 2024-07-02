import { Request, Response } from "express"
import { LoginServices } from "../Services/LoginServices"

export class LoginControllers {
    async LoginUsers(req: Request, res: Response) {
        const { email, pass } = req.body
        const login = new LoginServices
        const response = await login.LoginUsers({
            email, pass
        })
        return res.json(response)
    }

    async LoginAdms(req: Request, res: Response) {
        const { entry, pass } = req.body
        const login = new LoginServices
        const response = await login.LoginAdms({
            entry, pass
        })
        return res.json(response)
    }
}