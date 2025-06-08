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
exports.PigeonTime = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("./common/base.entity");
const piegon_entity_1 = require("./piegon.entity");
const dayResult_entity_1 = require("./dayResult.entity");
let PigeonTime = class PigeonTime extends base_entity_1.BaseEntity {
    pigeon;
    day_result;
    start_time;
    end_time;
    duration_minutes;
};
exports.PigeonTime = PigeonTime;
__decorate([
    (0, typeorm_1.ManyToOne)(() => piegon_entity_1.Pigeon, (pigeon) => pigeon.times),
    __metadata("design:type", piegon_entity_1.Pigeon)
], PigeonTime.prototype, "pigeon", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => dayResult_entity_1.DayResult, (result) => result.pigeon_times),
    __metadata("design:type", dayResult_entity_1.DayResult)
], PigeonTime.prototype, "day_result", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "timestamp" }),
    __metadata("design:type", Date)
], PigeonTime.prototype, "start_time", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "timestamp" }),
    __metadata("design:type", Date)
], PigeonTime.prototype, "end_time", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "int", nullable: true }),
    __metadata("design:type", Number)
], PigeonTime.prototype, "duration_minutes", void 0);
exports.PigeonTime = PigeonTime = __decorate([
    (0, typeorm_1.Entity)("pigeon_times")
], PigeonTime);
//# sourceMappingURL=piegonTime.entity.js.map