import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from "class-validator";

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  full_name: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MinLength(6)
  password_hash: string;

  @IsOptional()
  @IsString()
  role?: string;

  @IsOptional()
  @IsString()
  otp_code?: string;
}
