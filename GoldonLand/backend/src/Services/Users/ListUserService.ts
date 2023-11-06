import prisma from "../../prisma";

export class ListUserService {
    async execute() {
        const response = await prisma.user.findMany({})
        return response
    }
}