import prisma from "../../prisma";

interface Criar {
    name: string
    type: string
}

export class CriarCategoryService {
    async execute({ name, type }: Criar) {
        await prisma.category.create({
            data: {
                name: name,
                type: type
            },
            select: ({
                id: true,
                name: true,
                type: true
            })
        })
        return { message: "Category created successfully!" }
    }
}