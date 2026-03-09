import { Router } from "express";
import * as controller from "./products.controller"
import { adminOnly } from "../../middlewares/admin.middlewares";
import { validateId } from "../../middlewares/validateId.middleware"

const router = Router();

// Public
router.get("/category/:id",validateId, controller.getProductsByCategoryController);
router.get("/", controller.getAll);
router.get("/:id",validateId, controller.getById);

// Private
router.post("/", adminOnly, controller.create);
router.put("/:id",validateId, adminOnly, controller.update);
router.delete("/:id",validateId, adminOnly, controller.remove);

export default router;
