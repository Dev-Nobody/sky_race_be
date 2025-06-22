// // A loft is a participant/team and owns pigeons.

// import { Entity, Column, ManyToOne, OneToMany } from "typeorm";
// import { BaseEntity } from "./common/base.entity";
// import { User } from "./user.entity";
// import { Pigeon } from "./pigeon.entity";

// @Entity("lofts")
// export class Loft extends BaseEntity {
//   @Column()
//   name: string;

//   @ManyToOne(() => User, (user) => user.lofts)
//   user: User;

//   @OneToMany(() => Pigeon, (pigeon) => pigeon.loft)
//   pigeons: Pigeon[];
// }
