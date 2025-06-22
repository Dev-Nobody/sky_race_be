import { BaseEntity } from "./common/base.entity";
import { Participant } from "./participants.entity";
import { PigeonTime } from "./pigeonTime.entity";
export declare class Pigeon extends BaseEntity {
    name: string;
    color: string;
    participant: Participant;
    times: PigeonTime[];
}
