import prisma from "../../prisma";

export class ListarUserService {
    async execute() {
        const response = await prisma.user.findMany({})
        return response
    }
}