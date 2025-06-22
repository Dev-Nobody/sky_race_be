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
exports.TournamentsController = void 0;
const common_1 = require("@nestjs/common");
const create_tournament_dto_1 = require("./dto/create-tournament.dto");
const tournaments_service_1 = require("./tournaments.service");
let TournamentsController = class TournamentsController {
    tournamentService;
    constructor(tournamentService) {
        this.tournamentService = tournamentService;
    }
    create(dto) {
        return this.tournamentService.createTournament(dto);
    }
    findAll() {
        return this.tournamentService.getAll();
    }
    findOne(id) {
        return this.tournamentService.getById(id);
    }
};
exports.TournamentsController = TournamentsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_tournament_dto_1.CreateTournamentDto]),
    __metadata("design:returntype", void 0)
], TournamentsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TournamentsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TournamentsController.prototype, "findOne", null);
exports.TournamentsController = TournamentsController = __decorate([
    (0, common_1.Controller)("tournaments"),
    __metadata("design:paramtypes", [tournaments_service_1.TournamentsService])
], TournamentsController);
//# sourceMappingURL=tournaments.controller.js.map