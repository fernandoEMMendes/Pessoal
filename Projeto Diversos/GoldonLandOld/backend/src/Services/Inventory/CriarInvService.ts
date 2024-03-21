import prisma from "../../prisma";

interface Criar {
    categoriaId: string
    nome: string
    descricao: string
    forca: string
    precisao: string
    defesa: string
    pc_critico: string
    mp_dano: string
    quantidade: string
    usuarioId: string
}

export class CriarInvService {
    async execute({
        categoriaId,
        nome,
        descricao,
        forca,
        precisao,
        defesa,
        pc_critico,
        mp_dano,
        quantidade,
        usuarioId
    }: Criar) {

        const verifyUser = await prisma.user.findFirst({
            where: {
                id: usuarioId
            }
        })
        if (!verifyUser) {
            throw new Error("Usuario não encontrado") 
        }

        const verifyCategory = await prisma.category.findFirst({
            where: {
                id: categoriaId
            }
        })
        if (!verifyCategory) {
            throw new Error("Categoria não encontrada")
        }

        const verifyItem = await prisma.inventory.findFirst({
            where: {
                nome: nome,
                usuarioId: usuarioId
            }
        })
        if (verifyItem) {
            throw new Error("Item já adquirido pelo usuário")
        }

        await prisma.inventory.create({
            data: {
                categoriaId: categoriaId,
                nome: nome,
                descricao: descricao,
                forca: forca,
                precisao: precisao,
                defesa: defesa,
                pc_critico: pc_critico,
                mp_dano: mp_dano,
                quantidade: quantidade,
                usuarioId: usuarioId
            }
        })
        return { message: "Item created successfully!" }
    }

}