import { Router } from "express";
import { getOrderById} from "../../controllers/Order/getOrderByIdController";

const router = Router();

router.get('/:id', getOrderById)

export default router
