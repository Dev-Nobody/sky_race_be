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
exports.ResultsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const participants_entity_1 = require("../db/entities/participants.entity");
const pigeon_entity_1 = require("../db/entities/pigeon.entity");
const pigeonTime_entity_1 = require("../db/entities/pigeonTime.entity");
const typeorm_2 = require("typeorm");
let ResultsService = class ResultsService {
    participantRepo;
    pigeonRepo;
    pigeonTimeRepo;
    constructor(participantRepo, pigeonRepo, pigeonTimeRepo) {
        this.participantRepo = participantRepo;
        this.pigeonRepo = pigeonRepo;
        this.pigeonTimeRepo = pigeonTimeRepo;
    }
    async getLeaderboard(tournamentId) {
        const participants = await this.participantRepo.find({
            where: { tournament: { id: tournamentId } },
            relations: ["user"],
        });
        const results = await Promise.all(participants.map(async (participant) => {
            const pigeons = await this.pigeonRepo.find({
                where: { participant: { id: participant.id } },
            });
            let totalMinutes = 0;
            for (const pigeon of pigeons) {
                const times = await this.pigeonTimeRepo.find({
                    where: { pigeon: { id: pigeon.id } },
                });
                const pigeonTotal = times.reduce((sum, t) => sum + (t.duration_minutes || 0), 0);
                totalMinutes += pigeonTotal;
            }
            return {
                participant_id: participant.id,
                user_name: participant.user.full_name,
                total_minutes: totalMinutes,
            };
        }));
        return results.sort((a, b) => b.total_minutes - a.total_minutes);
    }
};
exports.ResultsService = ResultsService;
exports.ResultsService = ResultsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(participants_entity_1.Participant)),
    __param(1, (0, typeorm_1.InjectRepository)(pigeon_entity_1.Pigeon)),
    __param(2, (0, typeorm_1.InjectRepository)(pigeonTime_entity_1.PigeonTime)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], ResultsService);
//# sourceMappingURL=results.service.js.map