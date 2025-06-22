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
exports.Tournament = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("./common/base.entity");
const user_entity_1 = require("./user.entity");
const dayResult_entity_1 = require("./dayResult.entity");
let Tournament = class Tournament extends base_entity_1.BaseEntity {
    name;
    start_date;
    end_date;
    start_time;
    organizer;
    results;
};
exports.Tournament = Tournament;
__decorate([
    (0, typeorm_1.Column)({ type: "varchar" }),
    __metadata("design:type", String)
], Tournament.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "timestamp" }),
    __metadata("design:type", Date)
], Tournament.prototype, "start_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "timestamp" }),
    __metadata("design:type", Date)
], Tournament.prototype, "end_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar" }),
    __metadata("design:type", String)
], Tournament.prototype, "start_time", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.tournaments),
    __metadata("design:type", user_entity_1.User)
], Tournament.prototype, "organizer", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => dayResult_entity_1.DayResult, (result) => result.tournament),
    __metadata("design:type", Array)
], Tournament.prototype, "results", void 0);
exports.Tournament = Tournament = __decorate([
    (0, typeorm_1.Entity)("tournaments")
], Tournament);
//# sourceMappingURL=tournament.entity.js.map