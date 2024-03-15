import { Router } from "express";
import { UsuariosController } from "./Controllers/UsuariosController";

export const rota = Router()

//Rotas de Usuarios
rota.post("/CriarUsuarios", new UsuariosController().criarUsuariosController)