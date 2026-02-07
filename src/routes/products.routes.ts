import { Router } from "express";
import * as controller from "../controllers/products.controller"
import { adminOnly } from "../middlewares/admin.middlewares";

const router = Router();

// Public
router.get("/category/:id", controller.getProductsByCategoryController);
router.get("/", controller.getAll);
router.get("/:id", controller.getById);

// Private
router.post("/", adminOnly, controller.create);
router.put("/:id", adminOnly, controller.update);
router.delete("/:id", adminOnly, controller.remove);

export default router;
