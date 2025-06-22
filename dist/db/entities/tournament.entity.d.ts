import { BaseEntity } from "./common/base.entity";
import { User } from "./user.entity";
import { DayResult } from "./dayResult.entity";
export declare class Tournament extends BaseEntity {
    name: string;
    start_date: Date;
    end_date: Date;
    start_time: string;
    organizer: User;
    results: DayResult[];
}
