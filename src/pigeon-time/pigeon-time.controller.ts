import { Controller, Post, Body, Get, Param } from "@nestjs/common";
import { PigeonTimeService } from "./pigeon-time.service";
import { CreatePigeonTimeDto } from "./dto/create-pigeon-time.dto";

@Controller("pigeon-times")
export class PigeonTimeController {
  constructor(private readonly pigeonTimeService: PigeonTimeService) {}

  @Post()
  logFlight(@Body() dto: CreatePigeonTimeDto) {
    return this.pigeonTimeService.logFlight(dto);
  }

  @Get("pigeon/:id")
  getByPigeon(@Param("id") id: number) {
    return this.pigeonTimeService.getByPigeon(id);
  }

  @Get("pigeon/:id/total")
  getTotalTime(@Param("id") id: number) {
    return this.pigeonTimeService.getTotalDuration(id);
  }
}
