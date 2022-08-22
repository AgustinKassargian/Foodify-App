import { Router } from "express";
import { postEmail } from "../../controllers/Review/postEmailController";

const router = Router();

router.post("/",postEmail);

export default router