import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { LoginDto, RegisterDto, ResetPasswordDto, VerifyandResetPasswordDto, VerifyEmailDto } from './dto/create-auth.dto';
import { User } from 'src/db/entities/user.entity';
import { Repository } from 'typeorm';
import { VerificationService } from './verification/user.verification';
export declare class AuthService {
    private userRepo;
    private config;
    private verifcationService;
    private jwt;
    constructor(userRepo: Repository<User>, config: ConfigService, verifcationService: VerificationService, jwt: JwtService);
    register(dto: RegisterDto): Promise<User>;
    verifyEmail(dto: VerifyEmailDto): Promise<{
        message: string;
    }>;
    login(dto: LoginDto): Promise<{
        access_token: string;
    }>;
    requestPasswordReset(dto: ResetPasswordDto): Promise<{
        message: string;
    }>;
    verifyOtpAndResetPassword(dto: VerifyandResetPasswordDto): Promise<{
        message: string;
    }>;
    resendOtpCode(dto: ResetPasswordDto): Promise<"OTP has been resent. Check your email." | {
        error: any;
    }>;
    signToken(userId: number, email: string): Promise<{
        access_token: string;
    }>;
}
