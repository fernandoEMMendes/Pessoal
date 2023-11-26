import prisma from "../../prisma";

interface ListarUnico {
    userId: string
}

export class ListarUnicoUserService {
    async execute({userId}:ListarUnico){

        const response = await prisma.user.findFirst({
            where: {
                id: userId
            },
            select: {
                id: true,
                name: true,
                email: true
            }
        })
        return response
    }
}