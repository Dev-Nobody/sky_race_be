import { Repository } from "typeorm";
import { User } from "src/db/entities/user.entity";
import { UpdateUserDto } from "./dto/update-user.dto";
export declare class UsersService {
    private userRepo;
    constructor(userRepo: Repository<User>);
    findMe(userId: number): Promise<User>;
    findOne(id: number): Promise<User>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<User>;
    remove(id: number): Promise<User>;
    findAll(): Promise<User[]>;
}
