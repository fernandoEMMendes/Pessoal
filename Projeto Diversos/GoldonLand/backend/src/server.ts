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
        return res.status(400).json({
            error: err.message
        })
    }

    return res.status(500).json({
        status: "Erro interno do servidor"
    })

})

app.listen(7420, () => { console.log("Servidor iniciado na porta 7420 || =￣ω￣=") })