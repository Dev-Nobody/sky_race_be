import { Module } from "@nestjs/common";
import { TournamentsController } from "./tournaments.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Tournament } from "src/db/entities/tournament.entity";
import { TournamentsService } from "./tournaments.service";

@Module({
  imports: [TypeOrmModule.forFeature([Tournament])],
  controllers: [TournamentsController],
  providers: [TournamentsService],
})
export class TournamentsModule {}
