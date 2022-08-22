import { Router } from "express";
import { getHighPriceDish } from  "../../controllers/Dish/getHighPriceDishController"

const router = Router()

router.get('/', getHighPriceDish)

export default router