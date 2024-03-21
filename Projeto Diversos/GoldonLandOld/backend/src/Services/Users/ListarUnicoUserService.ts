import prisma from "../../prisma";

interface ListarUnico {
    usuarioId: string
}

export class ListarUnicoUserService {
    async execute({usuarioId}:ListarUnico){

        const response = await prisma.user.findFirst({
            where: {
                id: usuarioId
            },
            select: {
                id: true,
                nome: true,
                email: true
            }
        })
        return response
    }
}