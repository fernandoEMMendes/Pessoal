import { UsuariosControllers } from "./Controllers/UsuariosControllers"

import { Router } from "express"
export const rotas = Router()


rotas.post("/CriarUsuarios", new UsuariosControllers().CriarUsuarios)