import { Request, Response } from "express"
import { CriarCategoryService } from "../../Services/Category/CriarCategoryService"

export class CriarCategoryController {
    async handle(req: Request, res: Response) {
        const { nome, tipo } = req.body
        const criar = new CriarCategoryService()
        const response = await criar.execute({
            nome,
            tipo
        })
        return res.json(response)
    }
}