"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getNameDishController_1 = require("../controllers/getNameDishController");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/', getNameDishController_1.getName);
exports.default = router;
