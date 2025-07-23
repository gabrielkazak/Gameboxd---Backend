import { Router } from "express";
import { create, deleteGame, fetchGames } from "../controllers/wishController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = Router();

router.post('/wishlist/add', authMiddleware, create);
router.get('/wishlist/:id', authMiddleware, fetchGames);
router.delete('/wishlist/:userId/:gameId', authMiddleware, deleteGame);

export default router;