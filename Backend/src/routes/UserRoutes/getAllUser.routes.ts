import { Router } from "express";
import { getAllUsers } from "../../controllers/User/getAllUsersController";

const router = Router()

router.get('/', getAllUsers)

export default router