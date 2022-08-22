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
exports.createDish = void 0;
const Dish_1 = __importDefault(require("../models/Dish"));
const uuid_1 = require("uuid");
//import uuid from 'uuid'
//
const createDish = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, category, description, price, /*image,*/ active, rating } = req.body;
    try {
        const newDish = yield Dish_1.default.create({
            name,
            category,
            description,
            price,
            //image,
            active,
            rating,
            public_id: (0, uuid_1.v4)()
        });
        res.status(201).json(`${newDish}`);
    }
    catch (error) {
        res.status(500).json('Error: ' + error);
    }
});
exports.createDish = createDish;