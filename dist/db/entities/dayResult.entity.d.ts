import { BaseEntity } from "./common/base.entity";
import { Tournament } from "./tournament.entity";
import { PigeonTime } from "./piegonTime.entity";
export declare class DayResult extends BaseEntity {
    date: Date;
    tournament: Tournament;
    pigeon_times: PigeonTime[];
}
