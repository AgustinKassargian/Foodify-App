//import dishModel from '../models/Dish'
import { Router} from "express";
import { createDish } from '../../controllers/Dish/postDishController'
const router = Router();

//                                                        ~ POST DISH ~
//const dishModel = getModelForClass(Dish)
router.post("/", createDish);


export default router
