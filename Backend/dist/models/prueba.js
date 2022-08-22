"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import {connect} from "mongoose";
const index_1 = __importDefault(require("./index"));
const prueba = new index_1.default({
    name: 'joe',
    category: 'mama',
    price: 31,
    description: 'shico ite',
});
console.log(prueba);
