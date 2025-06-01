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
exports.VerifyandResetPasswordDto = exports.ResetPasswordDto = exports.VerifyEmailDto = exports.LoginDto = exports.RegisterDto = void 0;
const class_validator_1 = require("class-validator");
class RegisterDto {
    full_name;
    email;
    phone_number;
    password;
    confirm_password;
}
exports.RegisterDto = RegisterDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Full name is required.' }),
    (0, class_validator_1.IsString)({ message: 'Full name must be a string.' }),
    (0, class_validator_1.Length)(2, 50, {
        message: 'Full name must be between 2 and 50 characters.',
    }),
    (0, class_validator_1.Matches)(/^[A-Za-z]+(?: [A-Za-z]+)*$/, {
        message: 'Full name can only contain letters and single spaces (no leading/trailing spaces).',
    }),
    __metadata("design:type", String)
], RegisterDto.prototype, "full_name", void 0);
__decorate([
    (0, class_validator_1.IsEmail)({}, { message: 'Email must be a valid email address' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Email field should not be empty' }),
    __metadata("design:type", String)
], RegisterDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Phone number is required.' }),
    (0, class_validator_1.IsString)({ message: 'Phone number must be a string.' }),
    (0, class_validator_1.Matches)(/^\+?[1-9][0-9\-]{7,20}$/, {
        message: 'Phone number must be in valid international format, allow hyphens, and contain 8 to 15 digits.',
    }),
    __metadata("design:type", String)
], RegisterDto.prototype, "phone_number", void 0);
__decorate([
    (0, class_validator_1.Matches)(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/, {
        message: 'Password must include a mix of letters and numbers.',
    }),
    (0, class_validator_1.MinLength)(8, { message: 'Password must be at least 8 characters long.' }),
    (0, class_validator_1.IsString)({ message: 'Password must be a string.' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Password is required.' }),
    __metadata("design:type", String)
], RegisterDto.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.Matches)(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/, {
        message: 'Confirm password must include a mix of letters and numbers.',
    }),
    (0, class_validator_1.MinLength)(8, {
        message: 'Confirm password must be at least 8 characters long.',
    }),
    (0, class_validator_1.IsString)({ message: 'Confirm password must be a string.' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Confirm password is required.' }),
    __metadata("design:type", String)
], RegisterDto.prototype, "confirm_password", void 0);
class LoginDto {
    email;
    password;
}
exports.LoginDto = LoginDto;
__decorate([
    (0, class_validator_1.IsEmail)({}, { message: 'Email must be a valid email address' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Email field should not be empty' }),
    __metadata("design:type", String)
], LoginDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.Matches)(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/, {
        message: 'Password must include a mix of letters and numbers.',
    }),
    (0, class_validator_1.MinLength)(8, { message: 'Password must be at least 8 characters long.' }),
    (0, class_validator_1.IsString)({ message: 'Password must be a string.' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Password is required.' }),
    __metadata("design:type", String)
], LoginDto.prototype, "password", void 0);
class VerifyEmailDto {
    email;
    otp;
}
exports.VerifyEmailDto = VerifyEmailDto;
__decorate([
    (0, class_validator_1.IsEmail)({}, { message: 'Email must be a valid email address' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Email field should not be empty' }),
    __metadata("design:type", String)
], VerifyEmailDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], VerifyEmailDto.prototype, "otp", void 0);
class ResetPasswordDto {
    email;
}
exports.ResetPasswordDto = ResetPasswordDto;
__decorate([
    (0, class_validator_1.IsEmail)({}, { message: 'Email must be a valid email address' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Email field should not be empty' }),
    __metadata("design:type", String)
], ResetPasswordDto.prototype, "email", void 0);
class VerifyandResetPasswordDto {
    email;
    otp;
    newPassword;
}
exports.VerifyandResetPasswordDto = VerifyandResetPasswordDto;
__decorate([
    (0, class_validator_1.IsEmail)({}, { message: 'Email must be a valid email address' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Email field should not be empty' }),
    __metadata("design:type", String)
], VerifyandResetPasswordDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], VerifyandResetPasswordDto.prototype, "otp", void 0);
__decorate([
    (0, class_validator_1.Matches)(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/, {
        message: 'Password must include a mix of letters and numbers.',
    }),
    (0, class_validator_1.MinLength)(8, { message: 'Password must be at least 8 characters long.' }),
    (0, class_validator_1.IsString)({ message: 'Password must be a string.' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Password is required.' }),
    __metadata("design:type", String)
], VerifyandResetPasswordDto.prototype, "newPassword", void 0);
//# sourceMappingURL=create-auth.dto.js.map