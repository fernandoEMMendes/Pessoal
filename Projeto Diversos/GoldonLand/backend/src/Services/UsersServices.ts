import { prismaClient } from "../prisma/index"
import { hash } from "bcryptjs"

interface CreateUsers {
    nickname: string
    email: string
    pass: string
}

export class UsersServices {
    async CreateUsers(
        { nickname, email, pass }: CreateUsers
    ) {
        if (!nickname || !email || !pass) {
            throw new Error("Campos obrigátorios em branco!")
        }

        const passCrypt = await hash(pass, 8)
        const resposta = await prismaClient.users.create({
            data: {
                nickname: nickname,
                email: email,
                password: passCrypt
            },
            select: {
                nickname: true,
                email: true
            }
        })
        return resposta
    }
}