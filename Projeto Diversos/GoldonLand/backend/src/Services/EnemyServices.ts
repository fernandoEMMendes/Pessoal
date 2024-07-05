import { prismaClient } from "../prisma/index";

// Enemies

interface CreateEnemies {
    name: string
    desc: string
    hp: number
    str: number
    acc: number
}

// Drops

interface AssignDrops {
    enemyId: string
    catalogyId: string
    quantMin: number
    quantMax: number
}

export class EnemiesServices {

    // Enemies

    async CreateEnemies({ name, desc, hp, str, acc }: CreateEnemies) {
        if (!name || !desc) {
            throw new Error("Campos obrigátorios em branco!")
        }

        const response = await prismaClient.enemies.create({
            data: {
                name: name,
                desc: desc,
                hp: hp,
                str: str,
                acc: acc
            },
            select: {
                id: true,
                name: true,
                desc: true
            }
        })
        return response
    }

    // Drops

    async AssignDrops({ enemyId, catalogyId, quantMax, quantMin }: AssignDrops) {
        if (!enemyId || !catalogyId) {
            throw new Error("Campos obrigátorios em branco!")
        }

        const response = await prismaClient.dropEnemies.create({
            data: {
                enemyId: enemyId,
                catalogyId: catalogyId,
                quantMax: quantMax,
                quantMin: quantMin
            }
        })
        return response
    }
}