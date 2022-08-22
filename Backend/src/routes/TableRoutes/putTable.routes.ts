import { Router } from "express";
import updateTable from "../../controllers/Table/putTableController";

const router = Router();

router.put('/:id',updateTable);

export default router;