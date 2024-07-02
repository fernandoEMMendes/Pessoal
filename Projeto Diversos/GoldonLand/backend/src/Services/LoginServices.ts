import { prismaClient } from "../prisma";
import { compare } from "bcryptjs"
import { sign } from "jsonwebtoken"

interface LoginUsers {
    email: string
    pass: string
}

interface LoginAdms {
    entry: string
    pass: string
}

export class LoginServices {
    async LoginUsers({ email, pass }: LoginUsers) {
        if (!email || !pass) {
            throw new Error("Campos obrigátorios em branco!")
        }

        const verifyEmail = await prismaClient.users.findFirst({
            where: {
                email: email
            }
        })
        if (!verifyEmail) {
            throw new Error("Email ou senha incorreto(s)!")
        }

        const verifyPassword = await compare(pass, verifyEmail.password)
        if (!verifyPassword) {
            throw new Error("Email ou senha incorreto(s)!")
        }

        const token = sign(
            {
                id: verifyEmail.id,
                email: verifyEmail.email
            },
            process.env.JWT_BAR,
            {
                subject: verifyEmail.id,
                expiresIn: 3,
            }
        )
        return {
            id: verifyEmail.id,
            nickname: verifyEmail.nickname,
            token: token
        }
    }

    async LoginAdms({entry, pass}:LoginAdms){
        if (!entry || !pass) {
            throw new Error("Campos obrigátorios em branco!")
        }

        const verifyEntry = await prismaClient.adms.findFirst({
            where: {
                entry: entry
            }
        })
        if (!verifyEntry) {
            throw new Error("Nome ou senha incorreto(s)!")
        }
        const verifyPassword = await compare(pass, verifyEntry.password)
        if (!verifyPassword) {
            throw new Error("Nome ou senha incorreto(s)!")
        }

        const token = sign(
            {
                id: verifyEntry.id,
                email: verifyEntry.entry
            },
            process.env.JWT_BAR,
            {
                subject: verifyEntry.id,
                expiresIn: 3,
            }
        )

        return {
            entry: verifyEntry.entry
        }
    }
}