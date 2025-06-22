import { Module } from "@nestjs/common";
import { ParticipantsService } from "./participants.service";
import { ParticipantsController } from "./participants.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Participant } from "src/db/entities/participants.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Participant])],
  controllers: [ParticipantsController],
  providers: [ParticipantsService],
})
export class ParticipantsModule {}
