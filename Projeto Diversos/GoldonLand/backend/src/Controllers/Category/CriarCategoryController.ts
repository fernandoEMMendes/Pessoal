import { Request, Response } from "express"
import { CriarCategoryService } from "../../Services/Category/CriarCategoryService"

export class CriarCategoryController {
    async handle(req: Request, res: Response) {
        const { name, type } = req.body
        const criar = new CriarCategoryService()
        const response = await criar.execute({
            name,
            type
        })
        return res.json(response)
    }
}