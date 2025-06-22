import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateParticipantDto } from "./dto/create-participant.dto";
import { Participant } from "src/db/entities/participants.entity";

@Injectable()
export class ParticipantsService {
  constructor(
    @InjectRepository(Participant)
    private participantRepo: Repository<Participant>
  ) {}

  async addParticipant(dto: CreateParticipantDto) {
    const participant = this.participantRepo.create({
      user: { id: dto.user_id },
      tournament: { id: dto.tournament_id },
      number_of_pigeons: dto.number_of_pigeons,
      profile_image_url: dto.profile_image_url,
    });
    return await this.participantRepo.save(participant);
  }

  async listByTournament(tournamentId: number) {
    return await this.participantRepo.find({
      where: { tournament: { id: tournamentId } },
      relations: ["user", "tournament"],
    });
  }
}
