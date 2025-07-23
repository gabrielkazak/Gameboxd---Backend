import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const wishModel = {
    async create(name, userId, gameId) {
        const existingGame = await prisma.gamesWishList.findFirst({
            where: { name, userId }
        })

        if (existingGame) {
            throw new Error('Jogo já está na sua lista de desejos');
        }

        const createdGame = await prisma.gamesWishList.create({ data: { name, userId, gameId } })
        return { name: createdGame.name, userId: createdGame.userId, gameId: createdGame.gameId}
    },

    async delete(userId, gameId) {
        const game = await prisma.gamesWishList.delete({ where: { userId_gameId: { userId: userId, gameId: gameId } } })
        return {id: game.id, name: game.name}
    },

    async getAllFromUser(id) {
        const games = await prisma.gamesWishList.findMany({ where: {userId:id } })
        return {games}
    }
}

export default wishModel