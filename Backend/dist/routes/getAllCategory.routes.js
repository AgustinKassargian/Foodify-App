"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const getAllCategoryController_1 = require("../controllers/getAllCategoryController");
const router = (0, express_1.Router)();
router.get('/', getAllCategoryController_1.getAllCategory);
exports.default = router;
