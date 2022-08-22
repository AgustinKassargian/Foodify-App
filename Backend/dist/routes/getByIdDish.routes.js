"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getDishByIdController_1 = require("../controllers/getDishByIdController");
const { Router } = require('express');
const router = Router();
router.get('/:id', getDishByIdController_1.getDishesById);
exports.default = router;
