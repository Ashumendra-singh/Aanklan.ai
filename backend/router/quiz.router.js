import rounter from "express";
import wrapAsync from "../utils/wrapAsync.js";
import { getUser, requireAuth } from "../middleware/auth.middleware.js";

import { generateQuiz } from "../controllers/quiz.controller.js";
const router = rounter.Router();

router.post("/generate",getUser, requireAuth, wrapAsync(generateQuiz));

export default router;