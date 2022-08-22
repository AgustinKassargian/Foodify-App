import { Router } from 'express'
import { getLowRatingDish } from '../../controllers/Dish/getLowHighRatingController'

const router = Router()

router.get('/', getLowRatingDish)

export default router 