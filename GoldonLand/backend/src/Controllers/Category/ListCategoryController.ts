import { Request, Response } from "express";
import { ListCategoryService } from "../../Services/Category/ListCategoryService";

export class ListCategoryController {
    async handle(req: Request, res: Response) {
        const list = new ListCategoryService()
        const response = await list.execute()
        return res.json(response)
    }
}