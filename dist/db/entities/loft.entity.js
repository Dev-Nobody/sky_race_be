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
exports.Loft = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("./common/base.entity");
const user_entity_1 = require("./user.entity");
const piegon_entity_1 = require("./piegon.entity");
let Loft = class Loft extends base_entity_1.BaseEntity {
    name;
    user;
    pigeons;
};
exports.Loft = Loft;
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Loft.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.lofts),
    __metadata("design:type", user_entity_1.User)
], Loft.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => piegon_entity_1.Pigeon, (pigeon) => pigeon.loft),
    __metadata("design:type", Array)
], Loft.prototype, "pigeons", void 0);
exports.Loft = Loft = __decorate([
    (0, typeorm_1.Entity)("lofts")
], Loft);
//# sourceMappingURL=loft.entity.js.map