import { Router } from "express";
import { getNotFinalizedOrder } from "../../controllers/Order/getNotFinalizedOrdersController";

const router = Router();

router.get('/:id', getNotFinalizedOrder)

export default router