import { BaseEntity } from "./common/base.entity";
import { Loft } from "./loft.entity";
import { PigeonTime } from "./piegonTime.entity";
export declare class Pigeon extends BaseEntity {
    name: string;
    loft: Loft;
    times: PigeonTime[];
}
