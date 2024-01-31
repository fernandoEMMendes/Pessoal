import { Request, Express } from "express"
import { ApagarCategoryService } from "../../Services/Category/ApagarCategoryService"

export class ApgarCategoryController {
    async handle(req: Request, res: Response) {
        const { categoryId } = req.body
        const apagar = new ApagarCategoryService()
        const resposta = await apagar.execute({
            categoryId
        })
    }
}