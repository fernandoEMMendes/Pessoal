import prisma from "../../prisma"
import { hash } from "bcryptjs"

interface Criar {
    name: string
    email: string
    password: string
}

export class CriarUserService {
    async execute({ name, email, password }: Criar) {
        if (!name || !email || !password) { throw new Error("Campos obrigatórios não preenchidos") }
        const verificarEmail = await prisma.user.findFirst({
            where: {
                email: email
            }
        })
        if (verificarEmail) { throw new Error("Email já cadastrado") }

        const passwordCrypt = await hash(password, 8)

        await prisma.user.create({
            data: {
                name: name,
                email: email,
                password: passwordCrypt
            },
            select: {
                id: true,
                name: true,
                email: true
            }
        })
        return { message: "Usuário criado com sucesso!" }
    }
}