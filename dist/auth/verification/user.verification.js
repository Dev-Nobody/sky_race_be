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
exports.VerificationService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const nodemailer = require("nodemailer");
const user_entity_1 = require("../../db/entities/user.entity");
const typeorm_2 = require("typeorm");
let VerificationService = class VerificationService {
    config;
    userRepo;
    constructor(config, userRepo) {
        this.config = config;
        this.userRepo = userRepo;
    }
    async generateOtp() {
        return Math.floor(100000 + Math.random() * 900000).toString();
    }
    async sendOtpEmail(email, otp) {
        console.log(email);
        const transport = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: "77152036bc2e27",
                pass: "e0ec8aa46ed0a7",
            },
        });
        const mailOptions = {
            from: '"Your App Name" <no-reply@yourapp.com>',
            to: email,
            subject: "Verify Your Email Address",
            html: `
        <p>Dear User,</p>
        <p>Thank you for registering with us.</p>
        <p>Your One-Time Password (OTP) for email verification is:</p>
        <h2>${otp}</h2>
        <p>Please enter this code in the app to complete your verification.</p>
        <p>If you did not initiate this request, please ignore this email.</p>
        <p>Best regards,<br>Your App Team</p>
      `,
        };
        try {
            await transport.sendMail(mailOptions);
        }
        catch (error) {
            console.error("Error sending email: ", error);
        }
    }
    async sendPasswordResetOtpEmail(email, otp) {
        const transport = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: "77152036bc2e27",
                pass: "e0ec8aa46ed0a7",
            },
        });
        const mailOptions = {
            from: '"Your App Name" <no-reply@yourapp.com>',
            to: email,
            subject: "Password Reset Request",
            html: `
        <p>Dear User,</p>
        <p>We received a request to reset the password associated with this email address.</p>
        <p>Your One-Time Password (OTP) for resetting your password is:</p>
        <h2>${otp}</h2>
        <p>Please enter this OTP in the application to proceed with resetting your password.</p>
        <p>If you did not request a password reset, please ignore this email.</p>
        <p>Best regards,<br>Your App Team</p>
      `,
        };
        try {
            await transport.sendMail(mailOptions);
        }
        catch (error) {
            console.error("Error sending password reset email: ", error);
        }
    }
    async verifyOtp(email, otp) {
        const user = await this.userRepo.findOne({ where: { email } });
        if (!user) {
            throw new common_1.BadRequestException("User not found");
        }
        if (user.otp_code !== otp) {
            throw new common_1.BadRequestException("Invalid OTP");
        }
        user.is_verified = true;
        user.otp_code = "";
        await this.userRepo.save(user);
    }
};
exports.VerificationService = VerificationService;
exports.VerificationService = VerificationService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [config_1.ConfigService,
        typeorm_2.Repository])
], VerificationService);
//# sourceMappingURL=user.verification.js.map