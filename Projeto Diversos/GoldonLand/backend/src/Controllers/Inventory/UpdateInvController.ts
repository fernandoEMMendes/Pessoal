import { Request, Response } from "express";
import { UpdateInvService } from "../../Services/Inventory/UpdateInvService";

export class UpdateInvController {
    async handle(req: Request, res: Response) {
        const { inventoryId, novaQuantidade } = req.body
        const atualizar = new UpdateInvService()
        const resposta = atualizar.execute({
            inventoryId, novaQuantidade
        })
    }
}