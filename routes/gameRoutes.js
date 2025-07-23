import { Router } from "express";
import { create, deleteGame, fetchGames } from "../controllers/gamesController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = Router();

router.post('/gamesList/add', authMiddleware, create);
router.get('/gamesList/:id', authMiddleware, fetchGames);
router.delete('/gamesList/:userId/:gameId', authMiddleware, deleteGame);

export default router;