import {Request, Response} from "express"
import { ListarUnicoUserService } from "../../Services/Users/ListarUnicoUserService"


export class ListarUnicoUserController {
    async handle(req:Request, res:Response){
        const {usuarioId} = req.body
        const listarUnico = new ListarUnicoUserService()
        const response = await listarUnico.execute({
            usuarioId
        })
        return res.json(response)
    }
}