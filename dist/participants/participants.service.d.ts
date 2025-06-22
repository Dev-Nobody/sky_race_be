import { Repository } from "typeorm";
import { CreateParticipantDto } from "./dto/create-participant.dto";
import { Participant } from "src/db/entities/participants.entity";
export declare class ParticipantsService {
    private participantRepo;
    constructor(participantRepo: Repository<Participant>);
    addParticipant(dto: CreateParticipantDto): Promise<Participant>;
    listByTournament(tournamentId: number): Promise<Participant[]>;
}
