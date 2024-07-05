import { Request, Response } from "express";
import { EnemiesServices } from "../Services/EnemyServices";

export class EnemyControllers {

    // Enemies

    async CreateEnemies(req: Request, res: Response) {
        const { name, desc, hp, str, acc } = req.body
        const services = new EnemiesServices
        const response = await services.CreateEnemies({
            name, desc, hp, str, acc,
        })
        return res.json(response)
    }

    // Drops

    async AssignDrops(req: Request, res: Response) {
        const { enemyId, catalogyId, quantMin, quantMax } = req.body
        const services = new EnemiesServices
        const response = await services.AssignDrops({
            enemyId, catalogyId, quantMin, quantMax
        })
        return res.json(response)
    }
}