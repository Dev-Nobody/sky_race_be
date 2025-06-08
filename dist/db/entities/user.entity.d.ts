import { BaseEntity } from "./common/base.entity";
import { Tournament } from "./tournament.entity";
import { Loft } from "./loft.entity";
export declare enum UserRole {
    ADMIN = "admin",
    ORGANIZER = "organizer",
    USER = "user"
}
export declare class User extends BaseEntity {
    full_name: string;
    email: string;
    password_hash: string;
    role: UserRole;
    is_verified: boolean;
    otp_code: string;
    tournaments: Tournament[];
    lofts: Loft[];
}
