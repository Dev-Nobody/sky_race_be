import { CreateParticipantDto } from "./dto/create-participant.dto";
import { ParticipantsService } from "./participants.service";
export declare class ParticipantsController {
    private readonly participantService;
    constructor(participantService: ParticipantsService);
    add(dto: CreateParticipantDto): Promise<import("../db/entities/participants.entity").Participant>;
    list(tournamentId: number): Promise<import("../db/entities/participants.entity").Participant[]>;
}
