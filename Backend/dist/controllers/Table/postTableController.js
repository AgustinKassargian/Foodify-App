"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTable = void 0;
const Table_1 = __importDefault(require("../../models/Table"));
const createTable = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { table_number, max_capacity } = req.body;
    try {
        const newTable = yield Table_1.default.create({
            table_number,
            max_capacity
        });
        res.status(201).json(newTable);
    }
    catch (error) {
        res.status(500).json('Error: ' + error);
    }
});
exports.createTable = createTable;
