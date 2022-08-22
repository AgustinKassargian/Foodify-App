import { Router } from "express";
import { getWaiter } from "../../controllers/Waiter/getWaiterController";

const router = Router()

router.get('/', getWaiter)

export default router