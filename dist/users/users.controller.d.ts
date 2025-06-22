import { UsersService } from "./users.service";
import { UpdateUserDto } from "./dto/update-user.dto";
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    getMe(req: any): Promise<import("src/db/entities/user.entity").User>;
    getUser(id: string): Promise<import("src/db/entities/user.entity").User>;
    updateUser(id: string, updateUserDto: UpdateUserDto): Promise<import("src/db/entities/user.entity").User>;
    deleteUser(id: string): Promise<import("src/db/entities/user.entity").User>;
    getAllUsers(): Promise<import("src/db/entities/user.entity").User[]>;
}
