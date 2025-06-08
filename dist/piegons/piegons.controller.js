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
exports.PiegonsController = void 0;
const common_1 = require("@nestjs/common");
const piegons_service_1 = require("./piegons.service");
const create_piegon_dto_1 = require("./dto/create-piegon.dto");
const update_piegon_dto_1 = require("./dto/update-piegon.dto");
let PiegonsController = class PiegonsController {
    piegonsService;
    constructor(piegonsService) {
        this.piegonsService = piegonsService;
    }
    create(createPiegonDto) {
        return this.piegonsService.create(createPiegonDto);
    }
    findAll() {
        return this.piegonsService.findAll();
    }
    findOne(id) {
        return this.piegonsService.findOne(+id);
    }
    update(id, updatePiegonDto) {
        return this.piegonsService.update(+id, updatePiegonDto);
    }
    remove(id) {
        return this.piegonsService.remove(+id);
    }
};
exports.PiegonsController = PiegonsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_piegon_dto_1.CreatePiegonDto]),
    __metadata("design:returntype", void 0)
], PiegonsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PiegonsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PiegonsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_piegon_dto_1.UpdatePiegonDto]),
    __metadata("design:returntype", void 0)
], PiegonsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PiegonsController.prototype, "remove", null);
exports.PiegonsController = PiegonsController = __decorate([
    (0, common_1.Controller)('piegons'),
    __metadata("design:paramtypes", [piegons_service_1.PiegonsService])
], PiegonsController);
//# sourceMappingURL=piegons.controller.js.map