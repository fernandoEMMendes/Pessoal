import { Request, Response } from "express";
import { UsuariosServices } from "../Services/UsuariosServices";

export class UsuariosController {

    async criarUsuariosController(req: Request, res: Response) {
        const { login, password } = req.body
        const criarUsuario = new UsuariosServices()
        const resposta = await criarUsuario.criarUsuariosServices({
            login, password
        })
        return res.json(resposta)
    }
}