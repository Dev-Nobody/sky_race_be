import { CreatePiegonDto } from './dto/create-piegon.dto';
import { UpdatePiegonDto } from './dto/update-piegon.dto';
export declare class PiegonsService {
    create(createPiegonDto: CreatePiegonDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updatePiegonDto: UpdatePiegonDto): string;
    remove(id: number): string;
}
