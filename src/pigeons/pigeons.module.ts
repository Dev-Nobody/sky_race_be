import { Module } from "@nestjs/common";
import { PigeonsService } from "./pigeons.service";
import { PigeonsController } from "./pigeons.controller";

@Module({
  controllers: [PigeonsController],
  providers: [PigeonsService],
})
export class PigeonsModule {}
