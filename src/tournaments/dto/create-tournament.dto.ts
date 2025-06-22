import { IsNotEmpty, IsString, IsDateString, IsInt } from "class-validator";

export class CreateTournamentDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsDateString()
  start_date: string;

  @IsDateString()
  end_date: string;

  @IsString()
  start_time: string;

  @IsInt()
  organizer_id: number;
}
