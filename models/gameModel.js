import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const gameModel = {
    async create(name, rating, comment, userId, gameId) {
        const existingGame = await prisma.gamesList.findFirst({
            where: { name, userId }
        })

        if (existingGame) {
            throw new Error('Jogo já está na sua lista');
        }

        const createdGame = await prisma.gamesList.create({ data: { name, rating, comment, userId, gameId } })
        return { name: createdGame.name, rating: createdGame.rating, comment: createdGame.comment, userId: createdGame.userId, gameId: createdGame.gameId}
    },

    async delete(userId, gameId) {
        const game = await prisma.gamesList.delete({ where: { userId_gameId: { userId: userId, gameId: gameId } } })
        return {id: game.id, name: game.name}
    },

    async getAllFromUser(id) {
        const games = await prisma.gamesList.findMany({ where: {userId:id } })
        return {games}
    }
}

export default gameModel