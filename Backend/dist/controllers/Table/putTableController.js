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
const Table_1 = __importDefault(require("../../models/Table"));
const updateTable = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { table_number, max_capacity, actual_state } = req.body;
    try {
        const currentDish = yield Table_1.default.findByIdAndUpdate({ _id: id }, { table_number, max_capacity, actual_state });
        res.status(200).json(`${currentDish === null || currentDish === void 0 ? void 0 : currentDish.table_number} Updated Successfully`);
    }
    catch (error) {
        res.status(500).json("Fail to update, Error:" + error);
    }
});
exports.default = updateTable;
