import prisma from "../../prisma";

export class ListarInvService {
    async execute() {
        const response = await prisma.inv.findMany({})
        return response
    }
}