import {Router} from 'express';
import { createUser } from '../../controllers/User/postUserController';

const router = Router();

router.post("/",createUser);

export default router