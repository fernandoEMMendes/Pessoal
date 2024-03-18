import prismaClient from "../prisma";
import { hash } from "bcryptjs";

interface CriarUsuario {
    login: string
    password: string
}

export class UsuariosServices {

    async criarUsuariosServices({ login, password }: CriarUsuario) {
        const senhaCrypt = await hash(password, 8)

        const resposta = await prismaClient.usuarios.create({
            data: {
                login: login,
                senha: senhaCrypt
            },
            select: {
                login: true
            }
        })
        return resposta
    }
}