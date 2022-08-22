import { Router } from "express";
import { getLowPriceDish } from "../../controllers/Dish/getLowPriceDishController";

const router = Router()

router.get('/', getLowPriceDish)

export default router