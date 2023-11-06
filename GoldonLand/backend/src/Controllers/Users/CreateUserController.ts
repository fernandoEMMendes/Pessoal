import { Request, Response } from "express"
import { CreateUserService } from "../../Services/Users/CreateUserService"

export class CreateUserController {
    async handle(req: Request, res: Response) {
        const { name, email, password } = req.body
        //console.log(name, email, password)
        const create = new CreateUserService()
        const response = await create.execute({
            name,
            email,
            password
        })
        return res.json(response)
    }
}