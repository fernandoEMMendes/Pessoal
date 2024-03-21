import prisma from "../../prisma"
import { hash } from "bcryptjs"

interface Criar {
    nome: string
    email: string
    senha: string
}

export class CriarUserService {
    async execute({ nome, email, senha }: Criar) {
        if (!nome || !email || !senha) { throw new Error("Campos obrigatórios não preenchidos") }
        const verificarEmail = await prisma.user.findFirst({
            where: {
                email: email
            }
        })
        if (verificarEmail) { throw new Error("Email já cadastrado") }

        const passwordCrypt = await hash(senha, 8)

        await prisma.user.create({
            data: {
                nome: nome,
                email: email,
                senha: passwordCrypt
            },
            select: {
                id: true,
                nome: true,
                email: true
            }
        })
        return { message: "Usuário criado com sucesso!" }
    }
}