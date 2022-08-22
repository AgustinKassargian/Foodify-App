//Importamos express, la carecteristica Router, que nos permitira realizar las rutas
import postDishRouter from './DishRoutes/dishPost.routes'
import putDishRouter from './DishRoutes/putDish.routes'
import getAllDish from './DishRoutes/getAllDish.routes'
import getByIdDish from './DishRoutes/getByIdDish.routes'
import getByNameDishRoute from './DishRoutes/getByNameDish.routes'
import getAllCategory from './CategoryRoutes/getAllCategory.routes'
import getLowPriceDishRoute from './DishRoutes/getLowPriceDish.routes'
import getHighPriceDishRoute from './DishRoutes/getHighPriceDish.routes'
import getHighRatingDishRoute from './DishRoutes/getHighRating.routes'
import getLowRatingDishRoute from './DishRoutes/getLowRating.routes'
import getDishBydescriptionRoutes from './DishRoutes/getDishByDescriptionRoutes'
//import filterDish from './getDishByCategoryFilter.routes'


//IMPORTS CATEROGIAS
import postCategory from './CategoryRoutes/postCategory.routes';
import putCategory from './CategoryRoutes/putCategory.routes';
import getAllCategories from './CategoryRoutes/getAllCategory.routes'


const { Router } = require("express");
const router = Router();

//IMPORTS DE LAS MESAS
import postTable from './TableRoutes/postTable.routes';
import putTable from './TableRoutes/putTable.routes'
import getAllTables from './TableRoutes/getAllTable.routes'
import getTableById from './TableRoutes/getTableById.routes'
//Creamos una constante donde almacenamos Router para poder manipularlo

//IMPORTS DE LOS PEDIDOS
import postOrder from './OrderRoutes/postOrder.routes'
import getAllOrder from './OrderRoutes/getAllOrder.routes'
import putOrder from './OrderRoutes/putOrder.routes'
import getNotFinalizedOrder from './OrderRoutes/getNotFinalizedOrders.routes'
import getOrderById from './OrderRoutes/getOrderById.routes'
//const dishRouter = require("./dishRouter.ts"); //  Ruta de los platos
// const rutaejemplo = require('./rutaEjemplo.ts')

//IMPORT DE LOS MOSOS
import getWaiter from './WaiterRoutes/getWaiter.routes'
import getWaiterById from './WaiterRoutes/getWaiterById.routes'

//IMPORT DE LOS USUARIOS
import postUser from './UserRoutes/postUser.routes'
import putUser from './UserRoutes/putUser.routes'
import getAllUsers from './UserRoutes/getAllUser.routes'
import getUsersByType from './UserRoutes/getUsersByType.routes'


//IMPORT DE LAS REVIEWS
import postReviews from './ReviewRoutes/postReview.rotes'
import postEmail from './ReviewRoutes/postEmail.routes'
import getReview from './ReviewRoutes/getReview.routes'


//RUTAS DE LOS PLATOS

router.use("/dish", postDishRouter);
router.use("/dish", putDishRouter)
router.use("/dish", getAllDish);
router.use("/dish", getByIdDish)
router.use("/dishname", getByNameDishRoute)
router.use("/category", getAllCategory)
router.use("/dishlow", getLowPriceDishRoute)
router.use("/dishhigh", getHighPriceDishRoute)
router.use('/dishlowr', getHighRatingDishRoute)
router.use('/dishhighr', getLowRatingDishRoute)
router.use('/dishdesc', getDishBydescriptionRoutes)
//router.use('/filterdish', filterDish)

//RUTAS DE LAS CATEGORIAS
router.use('/category',postCategory)
router.use('/category',putCategory)
router.use('/category', getAllCategories)

//RUTAS DE LAS MESAS
router.use('/table', postTable)
router.use('/table',putTable)
router.use('/table', getAllTables)
router.use('/table', getTableById)

//RUTAS DE LOS PEDIDOS
router.use('/order',postOrder)
router.use('/order', getAllOrder)
router.use('/order', putOrder)
router.use('/order', getNotFinalizedOrder)
router.use('/orderid', getOrderById)

//RUTAS DE LOS MOSOS
router.use('/waiter', getWaiter)
router.use('/waiter',getWaiterById)

//RUTA DE LOS USUARIOS
router.use('/user', postUser)
router.use('/user', putUser)

router.use('/user', getAllUsers)
router.use('/user', getUsersByType)


//RUTA DE LAS REVIEWS
router.use('/review',postReviews)
router.use('/email',postEmail)
router.use('/review',getReview)


//exportamos las rutas
module.exports = router;
