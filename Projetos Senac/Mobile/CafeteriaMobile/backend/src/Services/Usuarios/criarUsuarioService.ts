import prismaClient from "../../prisma/index"
import { hash } from "bcryptjs"

interface criar {
    login: string
    senha: string
}

export class criarUsuarioService {
    async execute({ login, senha }: criar) {
        if (!login || !senha) { throw new Error("Campos obrigatórios em branco!") }

        const senhaCrypt = await hash(senha, 8)

        await prismaClient.usuarios.create({
            data: {
                login: login,
                senha: senhaCrypt
            },
            select: {
                id: true,
                nome: true
            }
        })
        return { msg: "Usuário criado com sucesso!" }
    }
}