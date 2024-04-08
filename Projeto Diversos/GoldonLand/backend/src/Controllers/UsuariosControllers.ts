import { Request, Response } from "express"

export class UsuariosControllers {
    async CriarUsuarios(req: Request, res: Response) {
        const { apelido, email, senha } = req.body
        console.log(apelido, email, senha)
    }
}

//Fazer Criar Usuario
//Fazer Login Usuario
//Fazer Middleware