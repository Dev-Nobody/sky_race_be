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
exports.Participant = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("./common/base.entity");
const user_entity_1 = require("./user.entity");
const tournament_entity_1 = require("./tournament.entity");
let Participant = class Participant extends base_entity_1.BaseEntity {
    user;
    tournament;
    number_of_pigeons;
    profile_image_url;
};
exports.Participant = Participant;
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: "user_id" }),
    __metadata("design:type", user_entity_1.User)
], Participant.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => tournament_entity_1.Tournament),
    (0, typeorm_1.JoinColumn)({ name: "tournament_id" }),
    __metadata("design:type", tournament_entity_1.Tournament)
], Participant.prototype, "tournament", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "int" }),
    __metadata("design:type", Number)
], Participant.prototype, "number_of_pigeons", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", nullable: true }),
    __metadata("design:type", String)
], Participant.prototype, "profile_image_url", void 0);
exports.Participant = Participant = __decorate([
    (0, typeorm_1.Entity)("participants")
], Participant);
//# sourceMappingURL=participants.entity.js.map