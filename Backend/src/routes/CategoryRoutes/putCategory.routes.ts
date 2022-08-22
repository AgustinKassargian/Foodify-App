import updateCategory from "../../controllers/Category/putCategory";
import { Router } from "express";

const router= Router();

router.put('/:id', updateCategory)

export default router