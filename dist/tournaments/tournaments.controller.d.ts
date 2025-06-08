import { TournamentsService } from './tournaments.service';
import { CreateTournamentDto } from './dto/create-tournament.dto';
import { UpdateTournamentDto } from './dto/update-tournament.dto';
export declare class TournamentsController {
    private readonly tournamentsService;
    constructor(tournamentsService: TournamentsService);
    create(createTournamentDto: CreateTournamentDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateTournamentDto: UpdateTournamentDto): string;
    remove(id: string): string;
}
