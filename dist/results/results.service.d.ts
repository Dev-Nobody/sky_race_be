import { Participant } from "src/db/entities/participants.entity";
import { Pigeon } from "src/db/entities/pigeon.entity";
import { PigeonTime } from "src/db/entities/pigeonTime.entity";
import { Repository } from "typeorm";
export declare class ResultsService {
    private participantRepo;
    private pigeonRepo;
    private pigeonTimeRepo;
    constructor(participantRepo: Repository<Participant>, pigeonRepo: Repository<Pigeon>, pigeonTimeRepo: Repository<PigeonTime>);
    getLeaderboard(tournamentId: number): Promise<{
        participant_id: number;
        user_name: string;
        total_minutes: number;
    }[]>;
}
