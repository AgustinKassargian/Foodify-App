import updateDish from "../../controllers/Dish/putDishController";
const {Router} = require('express')

const router = Router();

router.put('/:id', updateDish);

export default router