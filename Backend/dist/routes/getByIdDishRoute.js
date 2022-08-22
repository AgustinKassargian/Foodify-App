"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getDishById_1 = require("../controllers/getDishById");
const { Router } = require('express');
const router = Router();
router.get('/:id', getDishById_1.getDishesById);
exports.default = router;
