import { Controller, Post, Body, Get, Param } from "@nestjs/common";
import { CreateParticipantDto } from "./dto/create-participant.dto";
import { ParticipantsService } from "./participants.service";

@Controller("participants")
export class ParticipantsController {
  constructor(private readonly participantService: ParticipantsService) {}

  @Post()
  add(@Body() dto: CreateParticipantDto) {
    return this.participantService.addParticipant(dto);
  }

  @Get("tournament/:id")
  list(@Param("id") tournamentId: number) {
    return this.participantService.listByTournament(tournamentId);
  }
}
