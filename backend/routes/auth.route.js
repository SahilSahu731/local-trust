import express from "express";
import { protect } from "../middleware/auth.middleware.js";
import { register, login, logout } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

// Protected routes
router.post("/logout", protect, logout);

export default router;