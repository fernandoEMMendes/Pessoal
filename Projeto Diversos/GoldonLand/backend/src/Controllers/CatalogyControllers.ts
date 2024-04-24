import { Request, Response } from "express";
import { CatalogyServices } from "../Services/CatalogyServices";

export class CatalogyControllers {
    async CreateCatalogy(req: Request, res: Response) {
        const { name, desc, str, def, acc, acc_crit, mult_crit, categoryId } = req.body
        const services = new CatalogyServices
        const resposta = await services.CreateCatalogy({
            name, desc, str, def, acc, acc_crit, mult_crit, categoryId
        })
        return res.json(resposta)
    }
}