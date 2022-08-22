import {Router} from 'express'
import { getAllOrders } from '../../controllers/Order/getAllOrderController'

const router = Router()

router.get('/', getAllOrders)

export default router