import prisma from "../../prisma";

interface Create {
    name: string
}

export class CreateCategoryService {
    async execute({ name }: Create) {
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