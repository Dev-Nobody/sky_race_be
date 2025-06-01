import { PartialType } from '@nestjs/mapped-types';
import { LoginDto, RegisterDto } from './create-auth.dto';

export class UpdateRegisterDto extends PartialType(RegisterDto) {}
export class UpdateLogInDto extends PartialType(LoginDto) {}
