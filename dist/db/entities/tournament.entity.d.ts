import { BaseEntity } from "./common/base.entity";
import { User } from "./user.entity";
import { DayResult } from "./dayResult.entity";
export declare class Tournament extends BaseEntity {
    name: string;
    start_time: Date;
    end_time: Date;
    organizer: User;
    results: DayResult[];
}
