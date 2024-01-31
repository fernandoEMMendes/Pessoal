import prisma from "../../prisma";

interface apagar {
    invId: string
}

export class ApagarInvService {
    async execute({ invId }: apagar) {
        if (!invId) {
            throw new Error("Item não encontrado!")
        }

        await prisma.inventory.delete({
            where: {
                id: invId
            }
        })
        return { message: "Item apagado com sucesso!" }
    }
}