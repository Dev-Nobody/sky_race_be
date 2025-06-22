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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const argon = require("argon2");
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("../db/entities/user.entity");
const typeorm_2 = require("typeorm");
const user_verification_1 = require("./verification/user.verification");
let AuthService = class AuthService {
    userRepo;
    config;
    verifcationService;
    jwt;
    constructor(userRepo, config, verifcationService, jwt) {
        this.userRepo = userRepo;
        this.config = config;
        this.verifcationService = verifcationService;
        this.jwt = jwt;
    }
    async register(dto) {
        if (dto.password !== dto.confirm_password) {
            throw new common_1.BadRequestException("Passwords do not match.");
        }
        const existingUser = await this.userRepo.findOne({
            where: { email: dto.email },
        });
        if (existingUser) {
            throw new common_1.BadRequestException("An account with this email already exists. Please log in.");
        }
        const hash = await argon.hash(dto.password);
        const otp = await this.verifcationService.generateOtp();
        const user = this.userRepo.create({
            email: dto.email,
            full_name: dto.full_name,
            is_verified: false,
            password_hash: hash,
            otp_code: otp,
        });
        await this.userRepo.save(user);
        await this.verifcationService.sendOtpEmail(user.email, otp);
        return user;
    }
    async verifyEmail(dto) {
        await this.verifcationService.verifyOtp(dto.email, dto.otp);
        return { message: "Email verified successfully." };
    }
    async login(dto) {
        const user = await this.userRepo.findOne({
            where: { email: dto.email },
        });
        if (!user) {
            throw new common_1.ForbiddenException("Credentials incorrect");
        }
        if (!user.is_verified) {
            throw new common_1.ForbiddenException("User is not verified");
        }
        const passMatch = await argon.verify(user.password_hash, dto.password);
        if (!passMatch) {
            throw new common_1.ForbiddenException("Credentials incorrect");
        }
        return this.signToken(user.id, user.email, user.role);
    }
    async requestPasswordReset(dto) {
        const user = await this.userRepo.findOne({ where: { email: dto.email } });
        if (!user)
            throw new common_1.ForbiddenException("User doesn't exist");
        const otp = await this.verifcationService.generateOtp();
        user.otp_code = otp;
        await this.userRepo.save(user);
        await this.verifcationService.sendPasswordResetOtpEmail(dto.email, otp);
        return { message: "Check your email for OTP." };
    }
    async verifyOtpAndResetPassword(dto) {
        await this.verifcationService.verifyOtp(dto.email, dto.otp);
        const user = await this.userRepo.findOne({ where: { email: dto.email } });
        if (!user)
            throw new common_1.ForbiddenException("User doesn't exist");
        const hashedPassword = await argon.hash(dto.newPassword);
        user.password_hash = hashedPassword;
        user.otp_code = "";
        await this.userRepo.save(user);
        return { message: "Password reset successfully." };
    }
    async resendOtpCode(dto) {
        try {
            const user = await this.userRepo.findOne({ where: { email: dto.email } });
            if (!user) {
                throw new common_1.ForbiddenException("User does not exist");
            }
            const otp = await this.verifcationService.generateOtp();
            user.otp_code = otp;
            await this.userRepo.save(user);
            await this.verifcationService.sendOtpEmail(dto.email, otp);
            return "OTP has been resent. Check your email.";
        }
        catch (error) {
            return {
                error: error.message || "An error occurred while resending OTP.",
            };
        }
    }
    async signToken(userId, email, role) {
        const payload = {
            id: userId,
            email: email,
            role: role,
        };
        const secret = this.config.get("JWT_SECRET");
        const token = await this.jwt.signAsync(payload, {
            expiresIn: "7d",
            secret: secret,
        });
        return {
            access_token: token,
        };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        config_1.ConfigService,
        user_verification_1.VerificationService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map