import prisma from "../../prisma";

interface apagar {
    categoryId: string
}

export class ApagarCategoryService {
    async execute({ categoryId }: apagar) {
        if (!categoryId) {
            throw new Error("Categoria não encontrada!")
        }

        await prisma.category.delete({
            where: {
                id: categoryId
            }
        })
        return {message: "Categoria apagada com sucesso!"}
    }
}