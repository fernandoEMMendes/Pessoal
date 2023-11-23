import { Router } from "express"
export const routes = Router()


//user
import { CriarUserController } from "./Controllers/Users/CriarUserController"
import { ListarUserController } from "./Controllers/Users/ListarUserController"
import { ListarUnicoUserController } from "./Controllers/Users/ListarUnicoUserController"

//inv
import { CriarInvController } from "./Controllers/Inventory/CriarInvController"
import { ListarInvController } from "./Controllers/Inventory/ListarInvController"

//category
import { CriarCategoryController } from "./Controllers/Category/CriarCategoryController"
import { ListarCategoryController } from "./Controllers/Category/ListarCategoryController"


//user
routes.post("/CriarUsuario", new CriarUserController().handle)
routes.get("/ListarUsuario", new ListarUserController().handle)
routes.get("/ListarUnicoUsuario", new ListarUnicoUserController().handle)

//inv
routes.post("/CriarItem", new CriarInvController().handle)
routes.get("/ListarItem", new ListarInvController().handle)

//category
routes.post("/CriarCategoria", new CriarCategoryController().handle)
routes.get("/ListarCategoria", new ListarCategoryController().handle)