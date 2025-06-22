import { Pigeon } from "src/db/entities/pigeon.entity";
import { Repository } from "typeorm";
import { CreatePigeonDto } from "./dto/create-pigeon.dto";
export declare class PigeonsService {
    private pigeonRepo;
    constructor(pigeonRepo: Repository<Pigeon>);
    add(dto: CreatePigeonDto): Promise<any>;
    markStart(id: number): Promise<any>;
    markLanding(id: number): Promise<any>;
    getByParticipant(participantId: number): Promise<Pigeon[]>;
}
