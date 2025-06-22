import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateTournamentDto } from "./dto/create-tournament.dto";
import { Tournament } from "src/db/entities/tournament.entity";

@Injectable()
export class TournamentsService {
  constructor(
    @InjectRepository(Tournament)
    private tournamentRepo: Repository<Tournament>
  ) {}

  async createTournament(dto: CreateTournamentDto) {
    const tournament = this.tournamentRepo.create({
      name: dto.name,
      start_date: new Date(dto.start_date),
      end_date: new Date(dto.end_date),
      start_time: dto.start_time,
      organizer: { id: dto.organizer_id },
    });
    return this.tournamentRepo.save(tournament);
  }

  async getAll() {
    return this.tournamentRepo.find({ relations: ["organizer"] });
  }

  async getById(id: number) {
    const tournament = await this.tournamentRepo.findOne({
      where: { id },
      relations: ["organizer"],
    });
    if (!tournament) throw new NotFoundException("Tournament not found");
    return tournament;
  }
}
