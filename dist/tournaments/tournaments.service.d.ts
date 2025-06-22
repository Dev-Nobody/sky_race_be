import { Repository } from "typeorm";
import { CreateTournamentDto } from "./dto/create-tournament.dto";
import { Tournament } from "src/db/entities/tournament.entity";
export declare class TournamentsService {
    private tournamentRepo;
    constructor(tournamentRepo: Repository<Tournament>);
    createTournament(dto: CreateTournamentDto): Promise<Tournament>;
    getAll(): Promise<Tournament[]>;
    getById(id: number): Promise<Tournament>;
}
