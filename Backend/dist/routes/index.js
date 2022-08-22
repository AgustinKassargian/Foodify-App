"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Importamos express, la carecteristica Router, que nos permitira realizar las rutas
const dishPost_routes_1 = __importDefault(require("./dishPost.routes"));
const putDish_routes_1 = __importDefault(require("./putDish.routes"));
const getAllDish_routes_1 = __importDefault(require("./getAllDish.routes"));
const getByIdDish_routes_1 = __importDefault(require("./getByIdDish.routes"));
const getByNameDish_routes_1 = __importDefault(require("./getByNameDish.routes"));
const getAllCategory_routes_1 = __importDefault(require("./getAllCategory.routes"));
const getLowPriceDish_routes_1 = __importDefault(require("./getLowPriceDish.routes"));
const getHighPriceDish_routes_1 = __importDefault(require("./getHighPriceDish.routes"));
const getHighRating_routes_1 = __importDefault(require("./getHighRating.routes"));
const getLowRating_routes_1 = __importDefault(require("./getLowRating.routes"));
const getDishByDescriptionRoutes_1 = __importDefault(require("./getDishByDescriptionRoutes"));
//import filterDish from './getDishByCategoryFilter.routes'
const { Router } = require("express");
const router = Router();
//IMPORTS DE LAS MESAS
const postTable_routes_1 = __importDefault(require("./TableRoutes/postTable.routes"));
const putTable_routes_1 = __importDefault(require("./TableRoutes/putTable.routes"));
//Creamos una constante donde almacenamos Router para poder manipularlo
//IMPORTS DE LOS PEDIDOS
const postOrder_routes_1 = __importDefault(require("./OrderRoutes/postOrder.routes"));
const getAllOrder_routes_1 = __importDefault(require("./OrderRoutes/getAllOrder.routes"));
//const dishRouter = require("./dishRouter.ts"); //  Ruta de los platos
// const rutaejemplo = require('./rutaEjemplo.ts')
router.use("/dish", dishPost_routes_1.default);
router.use("/dish", putDish_routes_1.default);
router.use("/dish", getAllDish_routes_1.default);
router.use("/dish", getByIdDish_routes_1.default);
router.use("/dishname", getByNameDish_routes_1.default);
router.use("/category", getAllCategory_routes_1.default);
router.use("/dishlow", getLowPriceDish_routes_1.default);
router.use("/dishhigh", getHighPriceDish_routes_1.default);
router.use('/dishlowr', getHighRating_routes_1.default);
router.use('/dishhighr', getLowRating_routes_1.default);
router.use('/dishdesc', getDishByDescriptionRoutes_1.default);
//router.use('/filterdish', filterDish)
//RUTAS DE LAS MESAS
router.use('/table', postTable_routes_1.default);
router.use('/table', putTable_routes_1.default);
//RUTAS DE LOS PEDIDOS
router.use('/order', postOrder_routes_1.default);
router.use('/order', getAllOrder_routes_1.default);
//exportamos las rutas
module.exports = router;
