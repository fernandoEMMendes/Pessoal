import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken"

interface Payload {
    sub: string
}

export function isAuth(req: Request, res: Response, next: NextFunction) {
    const autToken = req.headers.authorization
    console.log(autToken)
}