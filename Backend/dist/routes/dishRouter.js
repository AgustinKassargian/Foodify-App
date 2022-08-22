"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//requerimos axios para hacer los pedidos
const axios = require("axios");
//import dishModel from '../models/Dish'
const Dish_1 = __importDefault(require("../models/Dish"));
const { Router } = require("express");
const router = Router();
//                                                        ~ POST DISH ~
//const dishModel = getModelForClass(Dish)
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, category, description, price, image, active } = req.body;
    try {
        const dish = yield createDish(name, category, description, price, image, active);
        res.status(200).json('ahreloco');
    }
    catch (error) {
        res.status(500).json(error + ' cuchame una cosita flaco la barra no es');
    }
}));
function createDish(name, category, description, price, image, active) {
    return __awaiter(this, void 0, void 0, function* () {
        const newDish = new Dish_1.default({
            name,
            category,
            description,
            price,
            image,
            active,
        });
        yield Dish_1.default.create(newDish);
        console.log(`Dish ${newDish.name} addded succesfully`);
    });
}
module.exports = router;
