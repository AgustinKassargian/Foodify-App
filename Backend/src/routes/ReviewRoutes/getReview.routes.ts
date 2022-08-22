import { Router } from "express";
import { getAllReviews } from "../../controllers/Review/getReviewController";

const router = Router();

router.get('/', getAllReviews)

export default router