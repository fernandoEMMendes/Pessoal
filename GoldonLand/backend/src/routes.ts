import { Router } from "express"
export const routes = Router()



import { CriarUserController } from "./Controllers/Users/CriarUserController"
import { CriarCategoryController } from "./Controllers/Category/CriarCategoryController"
import { CriarInvController } from "./Controllers/Inventory/CriarInvController"

import { ListarCategoryController } from "./Controllers/Category/ListarCategoryController"
import { ListarUserController } from "./Controllers/Users/ListarUserController"
import { ListarInvController } from "./Controllers/Inventory/ListarInvController"

//Create
routes.post("/CriarUsuario", new CriarUserController().handle)
routes.post("/CriarCategoria", new CriarCategoryController().handle)
routes.post("/CriarItem", new CriarInvController().handle)

//List
routes.get("/ListarUsuario", new ListarUserController().handle)
routes.get("/ListarCategoria", new ListarCategoryController().handle)
routes.get("/ListarItem", new ListarInvController().handle)