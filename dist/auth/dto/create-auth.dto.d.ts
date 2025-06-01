export declare class RegisterDto {
    full_name: string;
    email: string;
    phone_number: string;
    password: string;
    confirm_password: string;
}
export declare class LoginDto {
    email: string;
    password: string;
}
export declare class VerifyEmailDto {
    email: string;
    otp: string;
}
export declare class ResetPasswordDto {
    email: string;
}
export declare class VerifyandResetPasswordDto {
    email: string;
    otp: string;
    newPassword: string;
}
