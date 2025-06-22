import { PigeonsService } from "./pigeons.service";
import { CreatePigeonDto } from "./dto/create-pigeon.dto";
import { UpdatePigeonDto } from "./dto/update-pigeon.dto";
export declare class PigeonsController {
    private readonly pigeonsService;
    constructor(pigeonsService: PigeonsService);
    create(createPigeonDto: CreatePigeonDto): any;
    findAll(): any;
    findOne(id: string): any;
    update(id: string, updatePigeonDto: UpdatePigeonDto): any;
    remove(id: string): any;
}
