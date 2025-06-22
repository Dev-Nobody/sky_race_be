import { IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateParticipantDto {
  @IsInt()
  @IsNotEmpty()
  user_id: number;

  @IsInt()
  @IsNotEmpty()
  tournament_id: number;

  @IsInt()
  number_of_pigeons: number;

  @IsOptional()
  @IsString()
  profile_image_url?: string;
}
