import { LoginControllers } from "./Controllers/LoginControllers"
import { UsuariosControllers } from "./Controllers/UsuariosControllers"

import { Router } from "express"
export const rotas = Router()
import { isAuth } from "./middleware/auth"

//Logins
rotas.post("/LoginUsuario", new LoginControllers().LoginUsuarios)

//Usuarios
rotas.post("/CriarUsuarios", new UsuariosControllers().CriarUsuarios)
