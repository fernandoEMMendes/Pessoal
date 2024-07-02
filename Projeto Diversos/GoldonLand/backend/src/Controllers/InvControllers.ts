import { Request, Response } from "express";
import { InvServices } from "../Services/InvServices";

export class InvControllers {
    async CreateInv(req: Request, res: Response) {
        const { catalogyId, userId, newQuant } = req.body
        const services = new InvServices
        const response = await services.createInv({
            catalogyId, userId, newQuant
        })
        return res.json(response)
    }
}