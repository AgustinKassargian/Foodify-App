"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const getLowHighRatingController_1 = require("../controllers/getLowHighRatingController");
const router = (0, express_1.Router)();
router.get('/', getLowHighRatingController_1.getLowRatingDish);
exports.default = router;
