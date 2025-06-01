import { Injectable, BadRequestException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import * as nodemailer from 'nodemailer';
import { User } from 'src/db/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class VerificationService {
  constructor(
    private config: ConfigService,
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}

  async generateOtp(): Promise<string> {
    return Math.floor(100000 + Math.random() * 900000).toString();
  }

  async sendOtpEmail(email: string, otp: string): Promise<void> {
    const transport = nodemailer.createTransport({
      host: 'sandbox.smtp.mailtrap.io',
      port: 2525,
      auth: {
        user: '77152036bc2e27',
        pass: 'e0ec8aa46ed0a7',
      },
    });

    const mailOptions = {
      from: '"Your App Name" <no-reply@yourapp.com>',
      to: email,
      subject: 'Verify Your Email Address',
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
    } catch (error) {
      console.error('Error sending email: ', error);
    }
  }

  async sendPasswordResetOtpEmail(email: string, otp: string): Promise<void> {
    const transport = nodemailer.createTransport({
      host: 'sandbox.smtp.mailtrap.io',
      port: 2525,
      auth: {
        user: '77152036bc2e27',
        pass: 'e0ec8aa46ed0a7',
      },
    });

    const mailOptions = {
      from: '"Your App Name" <no-reply@yourapp.com>',
      to: email,
      subject: 'Password Reset Request',
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
    } catch (error) {
      console.error('Error sending password reset email: ', error);
    }
  }

  async verifyOtp(email: string, otp: string): Promise<void> {
    const user = await this.userRepo.findOne({ where: { email } });

    if (!user) {
      throw new BadRequestException('User not found');
    }

    if (user.otp_code !== otp) {
      throw new BadRequestException('Invalid OTP');
    }

    user.is_verified = true;
    user.otp_code = '';

    await this.userRepo.save(user);
  }
}
