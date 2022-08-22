"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const getAllOrderController_1 = require("../../controllers/Order/getAllOrderController");
const router = (0, express_1.Router)();
router.get('/', getAllOrderController_1.getAllOrders);
exports.default = router;
