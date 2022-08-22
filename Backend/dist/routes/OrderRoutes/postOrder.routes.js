"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const postOrderController_1 = require("../../controllers/Order/postOrderController");
const router = (0, express_1.Router)();
router.post('/', postOrderController_1.createOrder);
exports.default = router;
