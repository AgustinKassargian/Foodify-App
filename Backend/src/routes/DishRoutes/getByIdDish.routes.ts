import { getDishesById } from "../../controllers/Dish/getDishByIdController";
import { Router } from "express";

const router = Router();

router.get('/:id', getDishesById);

export default router