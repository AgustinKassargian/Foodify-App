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
exports.getAllOrders = void 0;
const Order_1 = __importDefault(require("../../models/Order"));
const getAllOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allOrders = yield Order_1.default.find();
        // const actualsOrders : IOrder[]  = allOrders.sort(function (a, b) {
        //     if (a.timestamps > b.timestamps) return 1;
        //     if (a.timestamps < b.timestamps) return -1;
        //     return 0;
        // })
        res.status(200).json(allOrders.reverse());
    }
    catch (error) {
        res.status(404).json(error);
    }
});
exports.getAllOrders = getAllOrders;
