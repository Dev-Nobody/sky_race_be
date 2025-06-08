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
exports.Pigeon = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("./common/base.entity");
const loft_entity_1 = require("./loft.entity");
const piegonTime_entity_1 = require("./piegonTime.entity");
let Pigeon = class Pigeon extends base_entity_1.BaseEntity {
    name;
    loft;
    times;
};
exports.Pigeon = Pigeon;
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Pigeon.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => loft_entity_1.Loft, (loft) => loft.pigeons),
    __metadata("design:type", loft_entity_1.Loft)
], Pigeon.prototype, "loft", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => piegonTime_entity_1.PigeonTime, (pt) => pt.pigeon),
    __metadata("design:type", Array)
], Pigeon.prototype, "times", void 0);
exports.Pigeon = Pigeon = __decorate([
    (0, typeorm_1.Entity)("pigeons")
], Pigeon);
//# sourceMappingURL=piegon.entity.js.map