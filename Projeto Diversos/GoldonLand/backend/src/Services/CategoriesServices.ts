import { prismaClient } from "../prisma/index"

interface CreateCategory {
    name: string
}

export class CategoriesServices {
    async CreateCategory({ name }: CreateCategory) {
        if (!name) {
            throw new Error("Campos obrigátorios em branco!")
        }

        const response = await prismaClient.categories.create({
            data: {
                name: name
            },
            select: {
                name: true
            }
        })
        return response
    }
}