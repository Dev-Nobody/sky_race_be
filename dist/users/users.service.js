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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("../db/entities/user.entity");
let UsersService = class UsersService {
    userRepo;
    constructor(userRepo) {
        this.userRepo = userRepo;
    }
    async findMe(userId) {
        if (!userId)
            throw new common_1.NotFoundException("ID is not provided.");
        const currentUser = await this.userRepo.findOne({ where: { id: userId } });
        if (!currentUser)
            throw new common_1.NotFoundException("User not found with this ID.");
        return currentUser;
    }
    async findOne(id) {
        const user = await this.userRepo.findOne({ where: { id } });
        if (!user)
            throw new common_1.NotFoundException("User not found.");
        return user;
    }
    async update(id, updateUserDto) {
        const user = await this.findOne(id);
        const userEmailMatch = await this.userRepo.findOne({
            where: { email: updateUserDto.email },
        });
        if (userEmailMatch)
            throw new common_1.BadRequestException("EMAIL ALREADY IN USE");
        if (updateUserDto.email && updateUserDto.email !== user.email) {
            const existingUser = await this.userRepo.findOne({
                where: { email: updateUserDto.email },
            });
            if (existingUser) {
                throw new Error(`Email "${updateUserDto.email}" is already in use.`);
            }
        }
        Object.assign(user, updateUserDto);
        return await this.userRepo.save(user);
    }
    async remove(id) {
        const user = await this.findOne(id);
        return await this.userRepo.remove(user);
    }
    async findAll() {
        return await this.userRepo.find();
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UsersService);
//# sourceMappingURL=users.service.js.map