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
exports.getDishesById = void 0;
const Dish_1 = __importDefault(require("../models/Dish"));
const getDishesById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    //
    try {
        if (id) {
            let dishId = yield Dish_1.default.findOne({ _id: id });
            console.log(dishId);
            res.status(200).json(dishId);
        }
    }
    catch (error) {
        res.status(404).json('error ---> ' + error);
    }
});
exports.getDishesById = getDishesById;
