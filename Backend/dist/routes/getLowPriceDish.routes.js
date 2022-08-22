"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const getLowPriceDishController_1 = require("../controllers/getLowPriceDishController");
const router = (0, express_1.Router)();
router.get('/', getLowPriceDishController_1.getLowPriceDish);
exports.default = router;
