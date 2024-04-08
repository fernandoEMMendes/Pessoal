import { prismaClient } from "../prisma";
import { compare } from "bcryptjs"
import { sign } from "jsonwebtoken"

interface LoginUsuarios {
    email: string
    password: string
}

export class LoginServices {
    async LoginUsuarios({ email, password }: LoginUsuarios) {
        if (!email || !password) {
            throw new Error("Campos obrigátorios em branco!")
        }

        const verificarEmail = await prismaClient.usuarios.findFirst({
            where: {
                email: email
            }
        })
        if (!verificarEmail) {
            throw new Error("Email ou senha incorreto(s)!")
        }

        const verificarPassword = await compare(password, verificarEmail.senha)
        if (!verificarPassword) {
            throw new Error("Email ou senha incorreto(s)!")
        }

        const token = sign(
            {
                id: verificarEmail.id,
                email: verificarEmail.email
            },
            process.env.JWT_BAR,
            {
                subject: verificarEmail.id,
                expiresIn: 3,
            }
        )
        return {
            id: verificarEmail.id,
            apelido: verificarEmail.apelido,
            token: token
        }
    }
}