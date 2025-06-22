import { Repository } from "typeorm";
import { CreatePigeonDto } from "./dto/create-pigeon.dto";
import { Pigeon } from "src/db/entities/pigeon.entity";
export declare class PigeonsService {
    private pigeonRepo;
    constructor(pigeonRepo: Repository<Pigeon>);
    add(dto: CreatePigeonDto): Promise<Pigeon>;
    getByParticipant(participantId: number): Promise<Pigeon[]>;
    getById(id: number): Promise<Pigeon>;
}
