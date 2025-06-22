import { Controller, Post, Body, Get, Param } from "@nestjs/common";
import { CreatePigeonDto } from "./dto/create-pigeon.dto";
import { PigeonsService } from "./pigeons.service";

@Controller("pigeons")
export class PigeonsController {
  constructor(private readonly pigeonService: PigeonsService) {}

  @Post()
  add(@Body() dto: CreatePigeonDto) {
    return this.pigeonService.add(dto);
  }

  @Get("participant/:id")
  getByParticipant(@Param("id") id: number) {
    return this.pigeonService.getByParticipant(id);
  }

  @Get(":id")
  getById(@Param("id") id: number) {
    return this.pigeonService.getById(id);
  }
}
