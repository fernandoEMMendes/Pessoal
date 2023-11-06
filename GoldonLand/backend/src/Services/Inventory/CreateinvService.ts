import prisma from "../../prisma";

interface Create {
    categoryId: string
    name: string
    description: string
    strength: string
    accuracy: string
    defense: string
    ac_crit: string
    mp_damage: string
    quantity: string
    userId: string
}

export class CreateInvService {
    async execute({
        categoryId,
        name,
        description,
        strength,
        accuracy,
        defense,
        ac_crit,
        mp_damage,
        quantity,
        userId
    }: Create) {

        const verifyUser = await prisma.user.findFirst({
            where: {
                id:userId
            }
        })
        if (!verifyUser) {
            return {message: "User not found"}
        }

        const verifyCategory = await prisma.category.findFirst({
            where: {
                id: categoryId
            }
        })
        if (!verifyCategory) {
            return {message: "Category not found"}
        }

        await prisma.inv.create({
            data: {
                categoryId: categoryId,
                name: name,
                description: description,
                strength: strength,
                accuracy: accuracy,
                defense: defense,
                ac_crit: ac_crit,
                mp_damage: mp_damage,
                quantity: quantity,
                userId: userId
            }
        })
        return { message: "Item created successfully!" }
    }

}