import { prismaClient } from "../prisma/index"

interface CreateInv {
    catalogyId: string
    userId: string
    newQuant: number
}

export class InvServices {
    async createInv({ catalogyId, userId, newQuant }: CreateInv) {
        if (!catalogyId || !userId || !newQuant) {
            throw new Error("Campos obrigátorios em branco!")
        }

        const verifyQuant = await prismaClient.inv.findFirst({
            where: {
                userId: userId,
                catalogyId: catalogyId
            }
        })
        if (verifyQuant) {
            const response = await prismaClient.inv.update({
                where: {
                    id: verifyQuant.id
                }, data: {
                    quant: verifyQuant.quant + newQuant
                }
            })
            return response
        } else {
            const response = await prismaClient.inv.create({
                data: {
                    catalogyId: catalogyId,
                    userId: userId,
                    quant: newQuant
                }
            })
            return response
        }
    }
}