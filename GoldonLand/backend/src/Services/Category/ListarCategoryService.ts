import prisma from "../../prisma";

export class ListarCategoryService {
    async execute() {
        const reponse = await prisma.category.findMany({})
        return reponse
    }
}