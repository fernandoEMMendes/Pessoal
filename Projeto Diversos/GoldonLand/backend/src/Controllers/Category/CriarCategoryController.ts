import { Request, Response } from "express"
import { CriarCategoryService } from "../../Services/Category/CriarCategoryService"

export class CriarCategoryController {
    async handle(req: Request, res: Response) {
        const { name } = req.body
        const criar = new CriarCategoryService()
        const response = await criar.execute({
            name
        })
        return res.json(response)
    }
}