import { BaseEntity } from "./common/base.entity";
import { User } from "./user.entity";
import { Pigeon } from "./piegon.entity";
export declare class Loft extends BaseEntity {
    name: string;
    user: User;
    pigeons: Pigeon[];
}
