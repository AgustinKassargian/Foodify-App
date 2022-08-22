"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Table = exports.State_Table = void 0;
const typegoose_1 = require("@typegoose/typegoose");
var State_Table;
(function (State_Table) {
    State_Table["available"] = "available";
    State_Table["busy"] = "busy";
    State_Table["maintenance"] = "maintence";
})(State_Table = exports.State_Table || (exports.State_Table = {}));
class Table {
}
__decorate([
    (0, typegoose_1.prop)({ required: true }),
    __metadata("design:type", String)
], Table.prototype, "table_number", void 0);
__decorate([
    (0, typegoose_1.prop)({ min: 1 }),
    __metadata("design:type", Number)
], Table.prototype, "max_capacity", void 0);
__decorate([
    (0, typegoose_1.prop)({ default: "available" }),
    __metadata("design:type", String)
], Table.prototype, "actual_state", void 0);
exports.Table = Table;
const tableModel = (0, typegoose_1.getModelForClass)(Table);
exports.default = tableModel;
