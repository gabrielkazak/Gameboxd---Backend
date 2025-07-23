import wishModel from "../models/wishlistModel.js";

export const create = async (req, res) => {
  const { name, userId, gameId } = req.body;

  if (!name || !userId || !gameId) {
    return res.status(400).json({ error: true, message: 'Todos os campos são obrigatórios' });
  }

  try {
    const game = await wishModel.create(name, parseInt(userId), parseInt(gameId));
    res.status(201).json({ error: false, message: 'Jogo adicionado à lista de desejos', game });
  } catch (error) {
    res.status(400).json({ error: true, message: error.message });
  }
};
  
export const deleteGame = async (req, res) => {
  const userId = parseInt(req.params.userId);
  const gameId = parseInt(req.params.gameId);

  if (isNaN(userId) || isNaN(gameId)) {
    return res.status(400).json({ error: true, message: 'Parâmetros inválidos' });
  }

  try {
    const game = await wishModel.delete(userId, gameId);
    res.status(200).json({ error: false, message: 'Jogo removido da lista de desejos', game });
  } catch (error) {
    res.status(400).json({ error: true, message: error.message });
  }
};

export const fetchGames = async (req, res) => {
  const id = parseInt(req.params.id);

  if (isNaN(id)) {
    return res.status(400).json({ error: true, message: 'ID inválido' });
  }

  try {
    const games = await wishModel.getAllFromUser(id);
    res.status(200).json({ error: false, games });
  } catch (error) {
    res.status(400).json({ error: true, message: error.message });
  }
};
