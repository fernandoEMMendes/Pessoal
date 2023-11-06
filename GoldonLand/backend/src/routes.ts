import { Router } from "express"
export const routes = Router()



import { CreateUserController } from "./Controllers/Users/CreateUserController"
import { CreateCategoryController } from "./Controllers/Category/CreateCategoryController"
import { CreateInvController } from "./Controllers/Inventory/CreateInvController"
import { ListCategoryController } from "./Controllers/Category/ListCategoryController"
import { ListUserController } from "./Controllers/Users/ListUserController"
import { ListInvController } from "./Controllers/Inventory/ListInvController"

//Create
routes.post("/CreateUser", new CreateUserController().handle)
routes.post("/CreateCategory", new CreateCategoryController().handle)
routes.post("/CreateItem", new CreateInvController().handle)

//List
routes.get("/ListUser", new ListUserController().handle)
routes.get("/ListCategory", new ListCategoryController().handle)
routes.get("/ListItem", new ListInvController().handle)