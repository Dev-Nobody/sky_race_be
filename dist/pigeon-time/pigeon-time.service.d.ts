import { Repository } from "typeorm";
import { CreatePigeonTimeDto } from "./dto/create-pigeon-time.dto";
import { PigeonTime } from "src/db/entities/pigeonTime.entity";
export declare class PigeonTimeService {
    private pigeonTimeRepo;
    constructor(pigeonTimeRepo: Repository<PigeonTime>);
    private flightTracker;
    logFlight(dto: CreatePigeonTimeDto): Promise<PigeonTime>;
    startFlight(pigeonId: number): Promise<{
        pigeon_id: number;
        start_time: Date;
    }>;
    endFlight(pigeonId: number): Promise<PigeonTime>;
    getByPigeon(pigeonId: number): Promise<PigeonTime[]>;
    getTotalDuration(pigeonId: number): Promise<number>;
}
