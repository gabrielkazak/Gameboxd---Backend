import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

const userModel = {
    async register(name, email, password) {
        const existingUser = await prisma.user.findUnique({
            where: { email }
        })

        if (existingUser) {
            throw new Error('Email já utilizado');
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        const user = await prisma.user.create({
            data:{name, email, password: hashedPassword}
        })
        return { id:user.id, name: user.name, email: user.email }
    },

    async login(email, password) {
        const existingUser = await prisma.user.findUnique({
            where: { email }
        })

        if (!existingUser) {
            throw new Error('Usuário não encontrado');
        }

        const validPassword = await bcrypt.compare(password, existingUser.password);
        if (!validPassword) {
            throw new Error('Senha inválida');
        }

        return {id: existingUser.id, name: existingUser.name}
    }
}

export default userModel;