import { Request, Response } from "express"
import { CriarInvService } from "../../Services/Inventory/CriarInvService"

export class CriarInvController {
    async handle(req: Request, res: Response) {
        const {
            categoriaId, nome, descricao, forca,
            precisao, defesa, pc_critico,
            mp_dano, quantidade, usuarioId
        } = req.body
        const criar = new CriarInvService()
        const response = await criar.execute({
            categoriaId, nome, descricao, forca,
            precisao, defesa, pc_critico,
            mp_dano, quantidade, usuarioId
        })
        return res.json(response)
    }
}