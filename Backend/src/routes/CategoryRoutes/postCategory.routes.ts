import { Router } from "express";
import { createCategory } from "../../controllers/Category/postCategory";

const router = Router();

router.post("/", createCategory);

export default router