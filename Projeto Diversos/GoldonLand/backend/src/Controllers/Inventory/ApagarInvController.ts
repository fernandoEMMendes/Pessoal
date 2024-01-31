import { Request, Response } from "express";
import { ApagarInvService } from "../../Services/Inventory/ApagarInvService";

export class ApagarInvController {
    async handle(req: Request, res: Response) {
        const { invId } = req.body
        const apagar = new ApagarInvService()
        const resposta = await apagar.execute({
            invId
        })
    }
}