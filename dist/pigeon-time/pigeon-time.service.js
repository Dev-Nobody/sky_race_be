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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PigeonTimeService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const pigeonTime_entity_1 = require("../db/entities/pigeonTime.entity");
let PigeonTimeService = class PigeonTimeService {
    pigeonTimeRepo;
    constructor(pigeonTimeRepo) {
        this.pigeonTimeRepo = pigeonTimeRepo;
    }
    flightTracker = new Map();
    async logFlight(dto) {
        const start = new Date(dto.start_time);
        const end = new Date(dto.end_time);
        const duration_minutes = Math.floor((end.getTime() - start.getTime()) / 60000);
        const entry = this.pigeonTimeRepo.create({
            pigeon: { id: dto.pigeon_id },
            start_time: start,
            end_time: end,
            duration_minutes,
        });
        return await this.pigeonTimeRepo.save(entry);
    }
    async startFlight(pigeonId) {
        const start = new Date();
        this.flightTracker.set(pigeonId, start);
        return { pigeon_id: pigeonId, start_time: start };
    }
    async endFlight(pigeonId) {
        const start = this.flightTracker.get(pigeonId);
        if (!start)
            throw new common_1.NotFoundException("No flight start time recorded");
        const end = new Date();
        const duration_minutes = Math.floor((end.getTime() - start.getTime()) / 60000);
        const entry = this.pigeonTimeRepo.create({
            pigeon: { id: pigeonId },
            start_time: start,
            end_time: end,
            duration_minutes,
        });
        this.flightTracker.delete(pigeonId);
        return await this.pigeonTimeRepo.save(entry);
    }
    async getByPigeon(pigeonId) {
        return await this.pigeonTimeRepo.find({
            where: { pigeon: { id: pigeonId } },
            order: { start_time: "ASC" },
        });
    }
    async getTotalDuration(pigeonId) {
        const records = await this.pigeonTimeRepo.find({
            where: { pigeon: { id: pigeonId } },
        });
        return records.reduce((sum, r) => sum + (r.duration_minutes || 0), 0);
    }
};
exports.PigeonTimeService = PigeonTimeService;
exports.PigeonTimeService = PigeonTimeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(pigeonTime_entity_1.PigeonTime)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PigeonTimeService);
//# sourceMappingURL=pigeon-time.service.js.map