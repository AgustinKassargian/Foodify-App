"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getDescriptionController_1 = require("../controllers/getDescriptionController");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/', getDescriptionController_1.getDishByDescription);
exports.default = router;
