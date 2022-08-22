import {Router} from 'express'
import { createOrder } from '../../controllers/Order/postOrderController'

const router = Router();

router.post('/', createOrder)

export default router