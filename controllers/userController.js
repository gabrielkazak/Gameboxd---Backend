import userModel from "../models/userModel.js";
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'defaultsecret';

export const register = async (req, res) => {
    const { name, email, password } = req.body;
    
    if (!name || !email || !password) {
        res.status(400).json({ error: 'Todos os campos são obrigatórios' })
        return
    }

    try {
        const user = await userModel.register(name, email, password);
        res.status(200).json({message: 'Usuário criado com sucesso', user})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

export const login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        res.status(400).json({ error: 'Todos os campos são obrigatórios' })
        return
    }

    try {
        const user = await userModel.login(email, password);
        const accessToken = jwt.sign(
            { id: user.id },
            JWT_SECRET,
            { expiresIn: '1d' }
        );
        
        res.status(200).json({message: 'Login realizado com sucesso', user, accessToken})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}