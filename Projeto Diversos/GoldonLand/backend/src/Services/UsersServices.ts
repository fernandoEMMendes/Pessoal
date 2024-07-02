import { prismaClient } from "../prisma/index"
import { hash } from "bcryptjs"

interface CreateUsers {
    nickname: string
    email: string
    pass: string
}

export class UsersServices {
    async CreateUsers({ nickname, email, pass }: CreateUsers) {
        if (!nickname || !email || !pass) {
            throw new Error("Campos obrigátorios em branco!")
        }

        const passCrypt = await hash(pass, 8)
        const verifyNickname = await prismaClient.users.findFirst({
            where: {
                nickname: nickname
            }
        })
        if (verifyNickname) {
            throw new Error(`${nickname}, já está sendo utilizado! Por favor escolha outro!`)
        }

        const response = await prismaClient.users.create({
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
        return response
    }
}