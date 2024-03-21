import { Router } from "express"
import { isAuth } from "./Middleware/isAuth"
export const routes = Router()

//Login
import { LoginController } from "./Controllers/Login/LoginController"

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


//Login
routes.post("/Login", new LoginController().handle)

//user
routes.post("/CriarUsuario", new CriarUserController().handle)
routes.get("/ListarUsuario", isAuth, new ListarUserController().handle)
routes.get("/ListarUnicoUsuario", isAuth, new ListarUnicoUserController().handle)

//inv
routes.post("/CriarItem", isAuth, new CriarInvController().handle)
routes.get("/ListarItem", isAuth, new ListarInvController().handle)

//category
routes.post("/CriarCategoria", isAuth, new CriarCategoryController().handle)
routes.get("/ListarCategoria", isAuth, new ListarCategoryController().handle)