import prisma from "../../prisma";

interface Criar {
    nome: string
    tipo: string
}

export class CriarCategoryService {
    async execute({ nome, tipo }: Criar) {
        await prisma.category.create({
            data: {
                nome: nome,
                tipo: tipo
            },
            select: ({
                id: true,
                nome: true,
                tipo: true
            })
        })
        return { message: "Categoria criada com sucesso!" }
    }
}