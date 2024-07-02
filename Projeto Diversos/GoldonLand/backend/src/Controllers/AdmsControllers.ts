import { Request, Response } from "express"
import { AdmsServices } from "../Services/AdmsServices"

export class AdmsControllers {
    async CreateAdms(req: Request, res: Response) {
        const { entry, pass } = req.body
        const services = new AdmsServices
        const response = await services.CreateAdms({
            entry, pass
        })
        return res.json(response)
    }
}