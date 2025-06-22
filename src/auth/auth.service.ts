import {
  BadRequestException,
  ForbiddenException,
  Injectable,
} from "@nestjs/common";
import * as argon from "argon2";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import {
  LoginDto,
  RegisterDto,
  ResetPasswordDto,
  VerifyandResetPasswordDto,
  VerifyEmailDto,
} from "./dto/create-auth.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/db/entities/user.entity";
import { Repository } from "typeorm";
import { VerificationService } from "./verification/user.verification";

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
    private config: ConfigService,
    private verifcationService: VerificationService,
    private jwt: JwtService
  ) {}

  async register(dto: RegisterDto) {
    // Check if passwords match
    if (dto.password !== dto.confirm_password) {
      throw new BadRequestException("Passwords do not match.");
    }

    // Check if user already exists
    const existingUser = await this.userRepo.findOne({
      where: { email: dto.email },
    });
    if (existingUser) {
      throw new BadRequestException(
        "An account with this email already exists. Please log in."
      );
    }

    // Hash the password
    const hash = await argon.hash(dto.password);

    const otp = await this.verifcationService.generateOtp();

    // Create new user entity
    const user = this.userRepo.create({
      email: dto.email,
      full_name: dto.full_name,
      is_verified: false,
      password_hash: hash, // assuming your User entity has a 'password' field
      otp_code: otp,
    });

    // Save user to the database
    await this.userRepo.save(user);
    await this.verifcationService.sendOtpEmail(user.email, otp);

    return user;
  }

  async verifyEmail(dto: VerifyEmailDto) {
    await this.verifcationService.verifyOtp(dto.email, dto.otp);
    return { message: "Email verified successfully." };
  }

  async login(dto: LoginDto) {
    // Find user by email
    const user = await this.userRepo.findOne({
      where: { email: dto.email },
    });

    if (!user) {
      throw new ForbiddenException("Credentials incorrect");
    }

    if (!user.is_verified) {
      throw new ForbiddenException("User is not verified");
    }

    // Verify password
    const passMatch = await argon.verify(user.password_hash, dto.password);

    if (!passMatch) {
      throw new ForbiddenException("Credentials incorrect");
    }

    // Return signed JWT token
    return this.signToken(user.id, user.email, user.role);
  }

  // Step 1: Request OTP for Password Reset
  async requestPasswordReset(dto: ResetPasswordDto) {
    const user = await this.userRepo.findOne({ where: { email: dto.email } });

    if (!user) throw new ForbiddenException("User doesn't exist");

    const otp = await this.verifcationService.generateOtp();

    // Save OTP to user
    user.otp_code = otp;
    await this.userRepo.save(user);

    // Send OTP via email
    await this.verifcationService.sendPasswordResetOtpEmail(dto.email, otp);

    return { message: "Check your email for OTP." };
  }

  // Step 2: Verify OTP and Reset Password
  async verifyOtpAndResetPassword(dto: VerifyandResetPasswordDto) {
    await this.verifcationService.verifyOtp(dto.email, dto.otp);

    const user = await this.userRepo.findOne({ where: { email: dto.email } });

    if (!user) throw new ForbiddenException("User doesn't exist");

    const hashedPassword = await argon.hash(dto.newPassword);

    user.password_hash = hashedPassword;
    user.otp_code = ""; // clear OTP
    await this.userRepo.save(user);

    return { message: "Password reset successfully." };
  }

  async resendOtpCode(dto: ResetPasswordDto) {
    try {
      const user = await this.userRepo.findOne({ where: { email: dto.email } });

      if (!user) {
        throw new ForbiddenException("User does not exist");
      }

      const otp = await this.verifcationService.generateOtp();

      user.otp_code = otp;
      await this.userRepo.save(user);

      await this.verifcationService.sendOtpEmail(dto.email, otp);
      return "OTP has been resent. Check your email.";
    } catch (error) {
      return {
        error: error.message || "An error occurred while resending OTP.",
      };
    }
  }

  // //Function for creating Token
  async signToken(
    userId: number,
    email: string,
    role: string
  ): Promise<{ access_token: string }> {
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
}
