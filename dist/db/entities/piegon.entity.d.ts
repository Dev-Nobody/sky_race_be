import { BaseEntity } from "./common/base.entity";
import { PigeonTime } from "./pigeonTime.entity";
import { Participant } from "./participants.entity";
export declare class Pigeon extends BaseEntity {
    name: string;
    color: string;
    participant: Participant;
    start_time: Date;
    end_time: Date;
    duration_seconds: number;
    times: PigeonTime[];
}
