import prisma from "../../prisma";

interface Atualizar {
    inventoryId: string
    novaQuantidade: string
}

export class UpdateInvService {
    async execute({ inventoryId, novaQuantidade }: Atualizar) {
        
    }
}