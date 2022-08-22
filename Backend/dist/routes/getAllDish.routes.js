"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const getAllDishController_1 = require("../controllers/getAllDishController");
const router = (0, express_1.Router)();
router.get('/', getAllDishController_1.getAllDish);
exports.default = router;
