import { PiegonsService } from './piegons.service';
import { CreatePiegonDto } from './dto/create-piegon.dto';
import { UpdatePiegonDto } from './dto/update-piegon.dto';
export declare class PiegonsController {
    private readonly piegonsService;
    constructor(piegonsService: PiegonsService);
    create(createPiegonDto: CreatePiegonDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updatePiegonDto: UpdatePiegonDto): string;
    remove(id: string): string;
}
