import { BaseEntity } from "./common/base.entity";
import { Pigeon } from "./piegon.entity";
import { DayResult } from "./dayResult.entity";
export declare class PigeonTime extends BaseEntity {
    pigeon: Pigeon;
    day_result: DayResult;
    start_time: Date;
    end_time: Date;
    duration_minutes: number;
}
