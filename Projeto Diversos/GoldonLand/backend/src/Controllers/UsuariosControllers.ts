import { Request, Response } from "express"
import { UsuariosServices } from "../Services/UsuariosServices"

export class UsuariosControllers {
    async CriarUsuarios(req: Request, res: Response) {
        const { apelido, email, senha } = req.body
        const services = new UsuariosServices
        const resposta = await services.CriarUsuarios({
            apelido, email, senha
        })
        return res.json(resposta)
    }
}


//Fazer Login Usuario
//Fazer Middleware