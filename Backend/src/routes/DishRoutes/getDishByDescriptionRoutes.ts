import { getDishByDescription } from "../../controllers/Dish/getDescriptionController";
import { Router } from "express";

const router = Router();

router.get('/', getDishByDescription)

export default router