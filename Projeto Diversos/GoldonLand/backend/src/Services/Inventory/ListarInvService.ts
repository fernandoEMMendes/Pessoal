import prisma from "../../prisma";

export class ListarInvService {
    async execute() {
        const response = await prisma.inventory.findMany({})
        return response
    }
}