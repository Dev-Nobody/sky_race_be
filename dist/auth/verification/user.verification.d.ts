import { ConfigService } from "@nestjs/config";
import { User } from "src/db/entities/user.entity";
import { Repository } from "typeorm";
export declare class VerificationService {
    private config;
    private userRepo;
    constructor(config: ConfigService, userRepo: Repository<User>);
    generateOtp(): Promise<string>;
    sendOtpEmail(email: string, otp: string): Promise<void>;
    sendPasswordResetOtpEmail(email: string, otp: string): Promise<void>;
    verifyOtp(email: string, otp: string): Promise<void>;
}
