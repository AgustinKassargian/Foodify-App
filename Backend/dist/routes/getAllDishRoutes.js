"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const getAllDishControllers_1 = require("../controllers/getAllDishControllers");
const router = (0, express_1.Router)();
router.get('/', getAllDishControllers_1.getAllDish);
exports.default = router;
