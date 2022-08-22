"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const putDishController_1 = __importDefault(require("../controllers/putDishController"));
const { Router } = require('express');
const router = Router();
router.put('/', putDishController_1.default);
exports.default = router;
