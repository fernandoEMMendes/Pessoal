import { LoginControllers } from "./Controllers/LoginControllers"
import { UsersControllers } from "./Controllers/UsersControllers"
import { AdmsControllers } from "./Controllers/AdmsControllers"
import { CategoriesControllers } from "./Controllers/CategoriesController"

import { Router } from "express"
import { isAuth } from "./middleware/auth"
import { CatalogyControllers } from "./Controllers/CatalogyControllers"
import { InvControllers } from "./Controllers/InvControllers"
import { EnemyControllers } from "./Controllers/EnemyControllers"
export const routes = Router()

//Logins
routes.post("/LoginUser", new LoginControllers().LoginUsers)
routes.post("/LoginAdm", new LoginControllers().LoginAdms)

//Users
routes.post("/CreateUsers", new UsersControllers().CreateUsers)

//Adms
routes.post("/CreateAdms", new AdmsControllers().CreateAdms)

//Categories 
routes.post("/CreateCategories", new CategoriesControllers().CreateCategory)

//Catalogy
routes.post("/CreateCatalogy", new CatalogyControllers().CreateCatalogy)

//Inv
routes.post("/CreateInv", new InvControllers().CreateInv)

//Enemies
routes.post("/CreateEnemies", new EnemyControllers().CreateEnemies)

//Drops
routes.post("/AssignDrops", new EnemyControllers().AssignDrops)