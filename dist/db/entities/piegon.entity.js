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
const pigeonTime_entity_1 = require("./pigeonTime.entity");
const participants_entity_1 = require("./participants.entity");
let Pigeon = class Pigeon extends base_entity_1.BaseEntity {
    name;
    color;
    participant;
    start_time;
    end_time;
    duration_seconds;
    times;
};
exports.Pigeon = Pigeon;
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Pigeon.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Pigeon.prototype, "color", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => participants_entity_1.Participant),
    (0, typeorm_1.JoinColumn)({ name: "participant_id" }),
    __metadata("design:type", participants_entity_1.Participant)
], Pigeon.prototype, "participant", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "timestamp", nullable: true }),
    __metadata("design:type", Date)
], Pigeon.prototype, "start_time", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "timestamp", nullable: true }),
    __metadata("design:type", Date)
], Pigeon.prototype, "end_time", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "int", nullable: true }),
    __metadata("design:type", Number)
], Pigeon.prototype, "duration_seconds", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => pigeonTime_entity_1.PigeonTime, (pt) => pt.pigeon),
    __metadata("design:type", Array)
], Pigeon.prototype, "times", void 0);
exports.Pigeon = Pigeon = __decorate([
    (0, typeorm_1.Entity)("pigeons")
], Pigeon);
//# sourceMappingURL=piegon.entity.js.map