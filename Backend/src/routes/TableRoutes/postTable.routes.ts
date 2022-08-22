import { Router } from "express";
import { createTable } from "../../controllers/Table/postTableController";

const router = Router();

router.post('/', createTable)

export default router