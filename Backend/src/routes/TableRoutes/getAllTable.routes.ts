import {Router} from 'express';
import { getAllTables } from '../../controllers/Table/getAllTableController'

const router = Router()

router.get('/', getAllTables)

export default router