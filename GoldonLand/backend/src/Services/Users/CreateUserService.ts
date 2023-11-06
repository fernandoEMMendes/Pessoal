import prisma from "../../prisma"

interface create {
    name: string
    email: string
    password: string
}

export class CreateUserService {
    async execute({ name, email, password }: create) {
        await prisma.user.create({
            data: {
                name: name,
                email: email,
                password: password
            },
            select: {
                id: true,
                name: true,
                email: true
            }
        })
        return { message: "User created successfully!" }
    }
}