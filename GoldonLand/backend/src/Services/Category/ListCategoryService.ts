import prisma from "../../prisma";

export class ListCategoryService {
    async execute() {
        const reponse = await prisma.category.findMany({})
        return reponse
    }
}