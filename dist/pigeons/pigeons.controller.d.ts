import { CreatePigeonDto } from "./dto/create-pigeon.dto";
import { PigeonsService } from "./pigeons.service";
export declare class PigeonsController {
    private readonly pigeonService;
    constructor(pigeonService: PigeonsService);
    add(dto: CreatePigeonDto): Promise<import("../db/entities/pigeon.entity").Pigeon>;
    getByParticipant(id: number): Promise<import("../db/entities/pigeon.entity").Pigeon[]>;
    getById(id: number): Promise<import("../db/entities/pigeon.entity").Pigeon>;
}
