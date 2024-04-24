import { prismaClient } from "../prisma/index"

interface CreateCatalogy {
    name: string
    desc: string
    str: number
    def: number
    acc: number,
    acc_crit: number,
    mult_crit: number,
    categoryId: string
}

export class CatalogyServices {
    async CreateCatalogy({ name, desc, str, def, acc, acc_crit, mult_crit, categoryId }: CreateCatalogy) {
        if (!name || !desc || !categoryId) {
            throw new Error("Campos obrigátorios em branco!")
        }

        const resposta = await prismaClient.catalogy.create({
            data: {
                name: name,
                desc: desc,
                str: str,
                def: def,
                acc: acc,
                acc_crit: acc_crit,
                mult_crit: mult_crit,
                categoryId: categoryId
            },
            select: {
                id: true,
                name: true
            }
        })
        return resposta
    }
}