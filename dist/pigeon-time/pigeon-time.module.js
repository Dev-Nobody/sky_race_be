"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PigeonTimeModule = void 0;
const common_1 = require("@nestjs/common");
const pigeon_time_service_1 = require("./pigeon-time.service");
const pigeon_time_controller_1 = require("./pigeon-time.controller");
const typeorm_1 = require("@nestjs/typeorm");
const pigeonTime_entity_1 = require("../db/entities/pigeonTime.entity");
let PigeonTimeModule = class PigeonTimeModule {
};
exports.PigeonTimeModule = PigeonTimeModule;
exports.PigeonTimeModule = PigeonTimeModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([pigeonTime_entity_1.PigeonTime])],
        controllers: [pigeon_time_controller_1.PigeonTimeController],
        providers: [pigeon_time_service_1.PigeonTimeService],
    })
], PigeonTimeModule);
//# sourceMappingURL=pigeon-time.module.js.map