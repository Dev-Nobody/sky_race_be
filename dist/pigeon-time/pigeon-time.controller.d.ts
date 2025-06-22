import { PigeonTimeService } from "./pigeon-time.service";
import { CreatePigeonTimeDto } from "./dto/create-pigeon-time.dto";
export declare class PigeonTimeController {
    private readonly pigeonTimeService;
    constructor(pigeonTimeService: PigeonTimeService);
    logFlight(dto: CreatePigeonTimeDto): Promise<import("../db/entities/pigeonTime.entity").PigeonTime>;
    getByPigeon(id: number): Promise<import("../db/entities/pigeonTime.entity").PigeonTime[]>;
    getTotalTime(id: number): Promise<number>;
}
