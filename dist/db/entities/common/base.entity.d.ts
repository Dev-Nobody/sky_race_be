import { BaseEntity as TypeORMBaseEntity } from 'typeorm';
export declare abstract class BaseEntity extends TypeORMBaseEntity {
    id: number;
    createdAt: Date;
    updatedAt: Date;
}
