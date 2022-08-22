import {Router} from 'express'
import { getTableById } from '../../controllers/Table/getTableIdController'

const router = Router()

router.get('/:id',getTableById)

export default router