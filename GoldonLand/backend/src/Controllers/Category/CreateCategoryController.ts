import { Request, Response } from "express"
import { CreateCategoryService } from "../../Services/Category/CreateCategoryService"

export class CreateCategoryController {
    async handle(req: Request, res: Response) {
        const { name } = req.body
        const create = new CreateCategoryService()
        const response = await create.execute({
            name
        })
        return res.json(response)
    }
}