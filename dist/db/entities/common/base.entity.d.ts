import { BaseEntity as TypeORMBaseEntity } from "typeorm";
export declare abstract class BaseEntity extends TypeORMBaseEntity {
    id: number;
    created_at: Date;
    updated_at: Date;
}
