import { getName } from "../../controllers/Dish/getNameDishController";
import { Router } from "express";

const router = Router();

router.get('/', getName)

export default router