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
exports.getName = void 0;
const Dish_1 = __importDefault(require("../models/Dish"));
const getName = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name } = req.query;
    console.log(name);
    try {
        if (name && typeof (name) === 'string') {
            let dishName = yield Dish_1.default.find();
            console.log(dishName);
            const filtrado = dishName.filter(e => e.name.toLowerCase().includes(name.toLowerCase()));
            console.log(filtrado);
            res.status(200).json(filtrado);
        }
    }
    catch (error) {
        res.status(404).json('error de getName --->' + error);
    }
});
exports.getName = getName;
