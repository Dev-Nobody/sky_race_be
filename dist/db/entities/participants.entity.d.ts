import { BaseEntity } from "src/db/entities/common/base.entity";
import { User } from "src/db/entities/user.entity";
import { Tournament } from "./tournament.entity";
export declare class Participant extends BaseEntity {
    user: User;
    tournament: Tournament;
    number_of_pigeons: number;
    profile_image_url: string;
}
