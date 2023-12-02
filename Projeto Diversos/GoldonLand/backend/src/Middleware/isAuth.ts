import { Request, Response, NextFunction } from "express"
import { verify } from "jsonwebtoken"

interface PayLoad {
    sub: string
}

export function isAuth(req: Request, res: Response, next: NextFunction) {
    const autenticador = req.headers.authorization

    if (!autenticador) {
        return res.json({ dados: "Token invalido" })
    }
    const [, token] = autenticador.split(" ")
    try {
        const { sub } = verify(
            token, process.env.AUTH_TOKEN
        ) as PayLoad
        req.user_id = sub

        return next()
    } catch (err) {
        return res.json({ dados: "Token expirado" })
    }
}