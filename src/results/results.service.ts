import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Participant } from "src/db/entities/participants.entity";
import { Pigeon } from "src/db/entities/pigeon.entity";
import { PigeonTime } from "src/db/entities/pigeonTime.entity";
import { Repository } from "typeorm";

@Injectable()
export class ResultsService {
  constructor(
    @InjectRepository(Participant)
    private participantRepo: Repository<Participant>,

    @InjectRepository(Pigeon)
    private pigeonRepo: Repository<Pigeon>,

    @InjectRepository(PigeonTime)
    private pigeonTimeRepo: Repository<PigeonTime>
  ) {}

  async getLeaderboard(tournamentId: number) {
    const participants = await this.participantRepo.find({
      where: { tournament: { id: tournamentId } },
      relations: ["user"],
    });

    const results = await Promise.all(
      participants.map(async (participant) => {
        const pigeons = await this.pigeonRepo.find({
          where: { participant: { id: participant.id } },
        });

        let totalMinutes = 0;

        for (const pigeon of pigeons) {
          const times = await this.pigeonTimeRepo.find({
            where: { pigeon: { id: pigeon.id } },
          });

          const pigeonTotal = times.reduce(
            (sum, t) => sum + (t.duration_minutes || 0),
            0
          );

          totalMinutes += pigeonTotal;
        }

        return {
          participant_id: participant.id,
          user_name: participant.user.full_name,
          total_minutes: totalMinutes,
        };
      })
    );

    return results.sort((a, b) => b.total_minutes - a.total_minutes);
  }
}
