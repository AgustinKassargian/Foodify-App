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
exports.getAllDish = void 0;
const Dish_1 = __importDefault(require("../models/Dish"));
const sortingDishes = (arr, filter) => {
    const ordered = arr.filter((e) => e.category.includes(filter)).sort(function (a, b) {
        if (a.name > b.name)
            return 1;
        if (a.name < b.name)
            return -1;
        return 0;
    });
    return ordered;
};
const getAllDish = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dishes = yield Dish_1.default.find();
        const starters = sortingDishes(dishes, 'Starter');
        const mains = sortingDishes(dishes, 'Main Dish');
        const desserts = sortingDishes(dishes, 'Dessert');
        const drinks = sortingDishes(dishes, 'Drink');
        const alldishes = starters.concat(mains).concat(desserts).concat(drinks);
        res.status(200).json(alldishes);
    }
    catch (error) {
        res.status(404).json('ASI NO SE USA BESTIA MIRA ESTE ERROR ---> ' + error);
    }
});
exports.getAllDish = getAllDish;
//
