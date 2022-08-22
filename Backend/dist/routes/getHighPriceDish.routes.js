"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const getHighPriceDishController_1 = require("../controllers/getHighPriceDishController");
const router = (0, express_1.Router)();
router.get('/', getHighPriceDishController_1.getHighPriceDish);
exports.default = router;
