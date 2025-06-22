import { IsNotEmpty, IsOptional, IsString, IsInt } from "class-validator";

export class CreatePigeonDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsOptional()
  @IsString()
  color?: string;

  @IsInt()
  @IsNotEmpty()
  participant_id: number;
}
