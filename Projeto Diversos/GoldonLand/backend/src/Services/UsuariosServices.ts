import { prismaClient } from "../prisma/index"
import { hash } from "bcryptjs"

interface CriarUsuarios {
    apelido: string
    email: string
    senha: string
}

export class UsuariosServices {
    async CriarUsuarios(
        { apelido, email, senha }: CriarUsuarios
    ) {
        if (!apelido || !email || !senha) {
            throw new Error("Campos obrigátorios em branco!")
        }

        const senhaCrypt = await hash(senha, 8)
        const resposta = await prismaClient.usuarios.create({
            data: {
                apelido: apelido,
                email: email,
                senha: senhaCrypt
            },
            select: {
                apelido: true,
                email: true
            }
        })
        return resposta
    }
}