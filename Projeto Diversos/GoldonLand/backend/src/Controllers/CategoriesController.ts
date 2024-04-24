import { Request, Response } from "express";
import { CategoriesServices } from "../Services/CategoriesServices";

export class CategoriesControllers {
    async CreateCategory(req: Request, res: Response) {
        const { name } = req.body
        const services = new CategoriesServices
        const resposta = await services.CreateCategory({
            name
        })
        return res.json(resposta)
    }
}