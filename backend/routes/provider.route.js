import express from "express";
import { protect, authorize } from "../middleware/auth.middleware.js";
import { createProviderProfile } from "../controllers/provider.controller.js";

const router = express.Router();

router.post("/create-provider-profile", protect, authorize("provider"), createProviderProfile);

export default router;