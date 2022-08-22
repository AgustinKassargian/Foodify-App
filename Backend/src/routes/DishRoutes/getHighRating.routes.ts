import { Router } from "express";
import { getHighRatingDish } from "../../controllers/Dish/getHighRatingDishController";

const router = Router()

router.get('/',getHighRatingDish)

export default router