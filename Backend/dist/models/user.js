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
exports.NormalUser = void 0;
const typegoose_1 = require("@typegoose/typegoose");
var UserTypes;
(function (UserTypes) {
    UserTypes[UserTypes["client"] = 0] = "client";
    UserTypes[UserTypes["waiter"] = 1] = "waiter";
    UserTypes[UserTypes["admin"] = 2] = "admin";
})(UserTypes || (UserTypes = {}));
class NormalUser {
}
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], NormalUser.prototype, "name", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], NormalUser.prototype, "lastname", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], NormalUser.prototype, "email", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], NormalUser.prototype, "pwd", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", Number)
], NormalUser.prototype, "age", void 0);
exports.NormalUser = NormalUser;
const clientUser = (0, typegoose_1.getModelForClass)(NormalUser);
exports.default = clientUser;
