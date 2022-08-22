import { Router } from "express";
import {updateOrder} from "../../controllers/Order/putOrderController"

const router = Router();

router.put('/:id', updateOrder)

export default router