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
exports.Order = void 0;
const typegoose_1 = require("@typegoose/typegoose");
const Dish_1 = require("./Dish");
const Table_1 = require("./Table");
class Order {
}
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], Order.prototype, "order_number", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", Number)
], Order.prototype, "final_price", void 0);
__decorate([
    (0, typegoose_1.prop)({ ref: () => Dish_1.Dish }),
    __metadata("design:type", Array)
], Order.prototype, "dishes", void 0);
__decorate([
    (0, typegoose_1.prop)({ ref: () => Table_1.Table }),
    __metadata("design:type", Object)
], Order.prototype, "table", void 0);
__decorate([
    (0, typegoose_1.prop)({ type: () => Date }),
    __metadata("design:type", Date)
], Order.prototype, "timestamps", void 0);
exports.Order = Order;
const orderModel = (0, typegoose_1.getModelForClass)(Order);
exports.default = orderModel;
