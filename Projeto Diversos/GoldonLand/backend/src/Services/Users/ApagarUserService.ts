import prisma from "../../prisma";

interface apagar {
    userId: string
}

export class ApagarUserService {
    async execute({ userId }: apagar) {
        if (!userId) {
            throw new Error("Usuário não encontrado!")
        }

        await prisma.user.delete({
            where: {
                id: userId
            }
        })
        return { message: "Usuário apagado com sucesso"}
    }
}