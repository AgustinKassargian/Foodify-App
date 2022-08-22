import {Router} from 'express';
import { getAllDish } from '../../controllers/Dish/getAllDishController';

const router = Router()

router.get('/', getAllDish)

export default router