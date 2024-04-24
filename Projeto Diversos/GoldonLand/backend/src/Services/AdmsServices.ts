import { prismaClient } from "../prisma/index"
import { hash } from "bcryptjs"

interface CreateAdms {
    entry: string
    pass: string
}

export class AdmsServices {
    async CreateAdms(
        { entry, pass }: CreateAdms
    ) {
        if (!entry || !pass) {
            throw new Error("Campos obrigátorios em branco!")
        }

        const passCrypt = await hash(pass, 8)
        const resposta = await prismaClient.adms.create({
            data: {
                entry: entry,
                password: passCrypt
            },
            select: {
                entry: true
            }
        })
        return resposta
    }
}