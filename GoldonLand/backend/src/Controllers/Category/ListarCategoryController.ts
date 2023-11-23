import { Request, Response } from "express";
import { ListarCategoryService } from "../../Services/Category/ListarCategoryService";

export class ListarCategoryController {
    async handle(req: Request, res: Response) {
        const listar = new ListarCategoryService()
        const response = await listar.execute()
        return res.json(response)
    }
}