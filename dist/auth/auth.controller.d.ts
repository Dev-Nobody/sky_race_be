import { AuthService } from './auth.service';
import { LoginDto, RegisterDto, ResetPasswordDto, VerifyandResetPasswordDto, VerifyEmailDto } from './dto/create-auth.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(registerDto: RegisterDto): Promise<import("../db/entities/user.entity").User>;
    login(loginDto: LoginDto): Promise<{
        access_token: string;
    }>;
    verifyEmail(dto: VerifyEmailDto): Promise<{
        message: string;
    }>;
    requestPasswordReset(dto: ResetPasswordDto): Promise<{
        message: string;
    }>;
    verifyOtpAndResetPassword(dto: VerifyandResetPasswordDto): Promise<{
        message: string;
    }>;
    ResendOtp(resendOtpDto: ResetPasswordDto): Promise<"OTP has been resent. Check your email." | {
        error: any;
    }>;
}
