import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { CreateTournamentDto } from "./dto/create-tournament.dto";
import { TournamentsService } from "./tournaments.service";

@Controller("tournaments")
export class TournamentsController {
  constructor(private readonly tournamentService: TournamentsService) {}

  @Post()
  create(@Body() dto: CreateTournamentDto) {
    return this.tournamentService.createTournament(dto);
  }

  @Get()
  findAll() {
    return this.tournamentService.getAll();
  }

  @Get(":id")
  findOne(@Param("id") id: number) {
    return this.tournamentService.getById(id);
  }
}
