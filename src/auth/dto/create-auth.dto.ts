import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Length,
  Matches,
  MinLength,
  ValidateIf,
} from 'class-validator';

//    DTO's List
// 1. RegisterDto
// 2. LoginDto
// 3. VerifyEmailDto
// 4. ResetPasswordDto
// 5. VerifyandResetPasswordDto

export class RegisterDto {
  @IsNotEmpty({ message: 'Full name is required.' })
  @IsString({ message: 'Full name must be a string.' })
  @Length(2, 50, {
    message: 'Full name must be between 2 and 50 characters.',
  })
  @Matches(/^[A-Za-z]+(?: [A-Za-z]+)*$/, {
    message:
      'Full name can only contain letters and single spaces (no leading/trailing spaces).',
  })
  full_name: string;

  @IsEmail({}, { message: 'Email must be a valid email address' })
  @IsNotEmpty({ message: 'Email field should not be empty' })
  email: string;

  @IsNotEmpty({ message: 'Phone number is required.' })
  @IsString({ message: 'Phone number must be a string.' })
  @Matches(/^\+?[1-9][0-9\-]{7,20}$/, {
    message:
      'Phone number must be in valid international format, allow hyphens, and contain 8 to 15 digits.',
  })
  phone_number: string;

  @Matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/, {
    message: 'Password must include a mix of letters and numbers.',
  })
  @MinLength(8, { message: 'Password must be at least 8 characters long.' })
  @IsString({ message: 'Password must be a string.' })
  @IsNotEmpty({ message: 'Password is required.' })
  password: string;
  @Matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/, {
    message: 'Confirm password must include a mix of letters and numbers.',
  })
  @MinLength(8, {
    message: 'Confirm password must be at least 8 characters long.',
  })
  @IsString({ message: 'Confirm password must be a string.' })
  @IsNotEmpty({ message: 'Confirm password is required.' })
  confirm_password: string;
}

export class LoginDto {
  @IsEmail({}, { message: 'Email must be a valid email address' })
  @IsNotEmpty({ message: 'Email field should not be empty' })
  email: string;

  @Matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/, {
    message: 'Password must include a mix of letters and numbers.',
  })
  @MinLength(8, { message: 'Password must be at least 8 characters long.' })
  @IsString({ message: 'Password must be a string.' })
  @IsNotEmpty({ message: 'Password is required.' })
  password: string;
}

export class VerifyEmailDto {
  @IsEmail({}, { message: 'Email must be a valid email address' })
  @IsNotEmpty({ message: 'Email field should not be empty' })
  email: string;

  @IsString()
  @IsNotEmpty()
  otp: string;
}

export class ResetPasswordDto {
  @IsEmail({}, { message: 'Email must be a valid email address' })
  @IsNotEmpty({ message: 'Email field should not be empty' })
  email: string;
}

export class VerifyandResetPasswordDto {
  @IsEmail({}, { message: 'Email must be a valid email address' })
  @IsNotEmpty({ message: 'Email field should not be empty' })
  email: string;

  @IsNotEmpty()
  otp: string;

  @Matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/, {
    message: 'Password must include a mix of letters and numbers.',
  })
  @MinLength(8, { message: 'Password must be at least 8 characters long.' })
  @IsString({ message: 'Password must be a string.' })
  @IsNotEmpty({ message: 'Password is required.' })
  newPassword: string;
}
