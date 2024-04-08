import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken"

interface Payload {
    sub: string
}

export function isAuth(req: Request, res: Response, next: NextFunction) {
    const authToken = req.headers.authorization

    if (!authToken) {
        return res.status(401).end()
    }

    const [, token] = authToken.split(" ")

    if (!token || token === '' || token === 'null') {
        return res.json({ dados: "Token Invalido!" })
    }

    try {
        const { sub } = verify(
            token,
            process.env.JWT_BAR
        ) as Payload

        req.user_id = sub
        return next()
    } catch (err) {
        return res.json({ dados: "Token Expirado!" })
    }
}