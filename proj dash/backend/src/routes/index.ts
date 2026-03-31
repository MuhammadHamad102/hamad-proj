import { Router } from "express";
import { healthCheck } from "../controllers/healthController";
import { getCards } from "../controllers/cards";
import { getStats } from "../controllers/statsRoutes"

const router = Router();

router.get("/health", healthCheck);
router.get("/cards", getCards);
router.get("/charts", getStats);

export default router;