import prisma from "../../prisma";
import { compare } from "bcryptjs"
import { sign } from "jsonwebtoken"

interface Login {
    email: string
    senha: string
}

export class LoginService {
    async execute({ email, senha }: Login) {
        const usuario = await prisma.user.findFirst({
            where: {
                email: email
            }
        })
        if (!usuario) { throw new Error("Usuário/Senha não encontrados") }

        const autenticar = await compare(senha, usuario.password)
        if (!autenticar) { throw new Error("Usuário/Senha não encontrados") }

        const token = sign(
            {
                id: usuario.id,
                email: usuario.email
            },
            process.env.AUTH_TOKEN,
            {
                subject: usuario.id,
                expiresIn: "3h"
            }
        )
        return {
            id: usuario.id,
            email: usuario.email,
            token: token
        }
    }
}