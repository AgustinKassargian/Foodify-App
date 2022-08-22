"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import dishModel from '../models/Dish'
const express_1 = require("express");
const postDishController_1 = require("../controllers/postDishController");
const router = (0, express_1.Router)();
//                                                        ~ POST DISH ~
//const dishModel = getModelForClass(Dish)
router.post("/", postDishController_1.createDish);
exports.default = router;
