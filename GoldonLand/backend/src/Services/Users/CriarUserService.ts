import prisma from "../../prisma"

interface Criar {
    name: string
    email: string
    password: string
}

export class CriarUserService {
    async execute({ name, email, password }: Criar) {
        await prisma.user.create({
            data: {
                name: name,
                email: email,
                password: password
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