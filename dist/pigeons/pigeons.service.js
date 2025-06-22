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
exports.PigeonsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const pigeon_entity_1 = require("../db/entities/pigeon.entity");
let PigeonsService = class PigeonsService {
    pigeonRepo;
    constructor(pigeonRepo) {
        this.pigeonRepo = pigeonRepo;
    }
    async add(dto) {
        const pigeon = this.pigeonRepo.create({
            name: dto.name,
            color: dto.color,
            participant: { id: dto.participant_id },
        });
        return await this.pigeonRepo.save(pigeon);
    }
    async getByParticipant(participantId) {
        return await this.pigeonRepo.find({
            where: { participant: { id: participantId } },
        });
    }
    async getById(id) {
        const pigeon = await this.pigeonRepo.findOne({ where: { id } });
        if (!pigeon)
            throw new common_1.NotFoundException("Pigeon not found");
        return pigeon;
    }
};
exports.PigeonsService = PigeonsService;
exports.PigeonsService = PigeonsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(pigeon_entity_1.Pigeon)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PigeonsService);
//# sourceMappingURL=pigeons.service.js.map