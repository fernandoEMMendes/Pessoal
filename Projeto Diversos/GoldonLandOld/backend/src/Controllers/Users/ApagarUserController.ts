import { Request, Response } from "express";
import { ApagarUserService } from "../../Services/Users/ApagarUserService";

export class ApagarUserController {
    async handle(req: Request, res: Response) {
        const { userId } = req.body
        const apagar = new ApagarUserService()
        const resposta = await apagar.execute({
            userId
        })
    }
}