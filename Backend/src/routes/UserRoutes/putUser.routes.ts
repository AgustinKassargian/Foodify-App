import updateUser from "../../controllers/User/putUserController";
import { Router } from "express";

const router= Router();

router.put('/',updateUser)

export default router