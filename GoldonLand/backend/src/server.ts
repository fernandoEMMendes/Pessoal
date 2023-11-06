import express, { Request, Response, NextFunction } from "express"
import "express-async-errors"
import cors from "cors"

import { routes } from "./routes"
const app = express()
app.use(cors())

app.use(express.json())

app.use(routes)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof Error) {
        return res.status(401).json({
            error: err.message
        })
    }
    return res.status(500).json({
        status: "Internal Server Error"
    })
})


app.listen(4444, () => { console.log("Server Running | Port 4444") })