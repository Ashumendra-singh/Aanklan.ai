import { Router } from "express";
const router = Router();
import wrapAsync from "../utils/wrapAsync.js";
import { requireAuth, getUser } from "../middleware/auth.middleware.js";


import {
    registerUser,
    loginUser,
    logoutUser,
    getCurrentUser
    
} from "../controllers/user.controller.js";
import { get } from "http";


router.post("/register", wrapAsync(registerUser));
router.post("/login", wrapAsync(loginUser));
router.post("/logout", getUser,  requireAuth,wrapAsync(logoutUser));
router.get("/me", getUser, requireAuth,  wrapAsync(getCurrentUser))

export default router;
