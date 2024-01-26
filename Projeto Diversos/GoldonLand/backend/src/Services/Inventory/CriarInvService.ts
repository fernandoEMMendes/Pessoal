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
            return { message: "User not found" }
        }

        const verifyCategory = await prisma.category.findFirst({
            where: {
                id: categoriaId
            }
        })
        if (!verifyCategory) {
            return { message: "Category not found" }
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
                usuarioId
            }
        })
        return { message: "Item created successfully!" }
    }

}