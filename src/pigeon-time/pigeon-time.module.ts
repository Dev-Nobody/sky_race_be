import { Module } from "@nestjs/common";
import { PigeonTimeService } from "./pigeon-time.service";
import { PigeonTimeController } from "./pigeon-time.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PigeonTime } from "src/db/entities/pigeonTime.entity";

@Module({
  imports: [TypeOrmModule.forFeature([PigeonTime])],
  controllers: [PigeonTimeController],
  providers: [PigeonTimeService],
})
export class PigeonTimeModule {}
