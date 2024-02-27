import { Request, Response } from "express"
import { criarUsuarioService } from "../../Services/Usuarios/criarUsuarioService"

export class criarUsuarioController {
    async handle(req: Request, res: Response) {
        const { login, senha } = req.body
        const criar = new criarUsuarioService()
        const resposta = await criar.execute({
            login, senha
        })
        return res.json(resposta)
    }
}