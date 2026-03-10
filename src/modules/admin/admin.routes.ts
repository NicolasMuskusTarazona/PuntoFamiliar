// src/modules/admin/admin.routes.ts
import { Router } from "express";
import { login } from "./admin.controller";

const router = Router();

// POST /admin/login
router.post("/login", login);

export default router;