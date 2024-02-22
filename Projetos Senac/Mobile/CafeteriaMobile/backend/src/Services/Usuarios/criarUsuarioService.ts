import prismaClient from "../../prisma/index"
import { hash } from "bcryptjs"

interface criar {
    nome: string
    senha: string
}

export class criarUsuarioService {
    async execute({ nome, senha }: criar) {
        if (!nome || !senha) { throw new Error("Campos obrigatórios em branco!") }

        const senhaCrypt = await hash(senha, 8)

        await prismaClient.usuarios.create({
            data: {
                nome: nome,
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