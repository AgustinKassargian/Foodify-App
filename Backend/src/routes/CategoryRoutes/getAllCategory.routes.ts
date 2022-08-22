import {Router} from 'express';
import { getAllCategories } from '../../controllers/Category/getAllCategoryController';

const router = Router()

router.get('/', getAllCategories )

export default router