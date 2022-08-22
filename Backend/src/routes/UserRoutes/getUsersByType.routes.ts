import { Router } from "express";
import { getUserByType } from "../../controllers/User/getUserByTypeController";

const router = Router();

router.get('/',getUserByType)

export default router