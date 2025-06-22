import { IsNotEmpty, IsInt, IsDateString } from "class-validator";

export class CreatePigeonTimeDto {
  @IsInt()
  @IsNotEmpty()
  pigeon_id: number;

  @IsDateString()
  @IsNotEmpty()
  start_time: string;

  @IsDateString()
  @IsNotEmpty()
  end_time: string;
}
