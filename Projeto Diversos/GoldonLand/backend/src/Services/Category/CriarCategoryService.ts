import prisma from "../../prisma";

interface Criar {
    name: string
}

export class CriarCategoryService {
    async execute({ name }: Criar) {
        await prisma.category.create({
            data: {
                name: name
            },
            select: ({
                id: true,
                name: true
            })
        })
        return { message: "Category created successfully!" }
    }
}