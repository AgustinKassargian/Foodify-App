import { Router } from "express";
import { getWaiterById } from "../../controllers/Waiter/getWaiterByIdController";

const router=Router();

router.get('/:id',getWaiterById)

export default router