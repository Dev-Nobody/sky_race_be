import { Controller, Post, Body, UseFilters } from '@nestjs/common';
import { AuthService } from './auth.service';
import {
  LoginDto,
  RegisterDto,
  ResetPasswordDto,
  VerifyandResetPasswordDto,
  VerifyEmailDto,
} from './dto/create-auth.dto';
import { Throttle } from '@nestjs/throttler';
import { ThrottlerExceptionFilter } from './filters/throttler_exception';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(@Body() registerDto: RegisterDto) {
    return this.authService.register(registerDto);
  }

  @Post('login')
  login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  @Post('verify')
  verifyEmail(@Body() dto: VerifyEmailDto) {
    return this.authService.verifyEmail(dto);
  }

  @Post('request-reset')
  async requestPasswordReset(@Body() dto: ResetPasswordDto) {
    return this.authService.requestPasswordReset(dto);
  }

  @Post('reset-password')
  async verifyOtpAndResetPassword(@Body() dto: VerifyandResetPasswordDto) {
    return this.authService.verifyOtpAndResetPassword(dto);
  }

  @Throttle({ default: { limit: 1, ttl: 60000 } })
  @UseFilters(ThrottlerExceptionFilter)
  @Post('resend-otp')
  ResendOtp(@Body() resendOtpDto: ResetPasswordDto) {
    return this.authService.resendOtpCode(resendOtpDto);
  }
}
