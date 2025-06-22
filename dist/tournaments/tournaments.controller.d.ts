import { CreateTournamentDto } from "./dto/create-tournament.dto";
import { TournamentsService } from "./tournaments.service";
export declare class TournamentsController {
    private readonly tournamentService;
    constructor(tournamentService: TournamentsService);
    create(dto: CreateTournamentDto): Promise<import("../db/entities/tournament.entity").Tournament>;
    findAll(): Promise<import("../db/entities/tournament.entity").Tournament[]>;
    findOne(id: number): Promise<import("../db/entities/tournament.entity").Tournament>;
}
