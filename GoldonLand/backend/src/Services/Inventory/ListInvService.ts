import prisma from "../../prisma";

export class ListInvService {
    async execute() {
        const response = await prisma.inv.findMany({})
        return response
    }
}