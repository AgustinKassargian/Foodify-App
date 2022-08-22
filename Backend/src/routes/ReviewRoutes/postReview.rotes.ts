import { Router } from "express";
import { createReview } from "../../controllers/Review/postReviewController";

const router = Router();

router.post("/",createReview);

export default router