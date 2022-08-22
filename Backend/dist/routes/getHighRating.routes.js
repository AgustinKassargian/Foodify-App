"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const getHighRatingDishController_1 = require("../controllers/getHighRatingDishController");
const router = (0, express_1.Router)();
router.get('/', getHighRatingDishController_1.getHighRatingDish);
exports.default = router;
