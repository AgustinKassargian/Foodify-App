"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const postTableController_1 = require("../../controllers/Table/postTableController");
const router = (0, express_1.Router)();
router.post('/', postTableController_1.createTable);
exports.default = router;
