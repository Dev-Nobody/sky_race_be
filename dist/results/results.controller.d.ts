import { ResultsService } from "./results.service";
export declare class ResultsController {
    private readonly resultService;
    constructor(resultService: ResultsService);
    leaderboard(id: number): Promise<{
        participant_id: number;
        user_name: string;
        total_minutes: number;
    }[]>;
}
