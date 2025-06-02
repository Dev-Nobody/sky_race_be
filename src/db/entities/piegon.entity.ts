// Represents individual pigeons owned by a Loft.
import { Entity, Column, ManyToOne, OneToMany } from "typeorm";
import { BaseEntity } from "./common/base.entity";
import { Loft } from "./loft.entity";
import { PigeonTime } from "./piegonTime.entity";

@Entity("pigeons")
export class Pigeon extends BaseEntity {
  @Column()
  name: string;

  @ManyToOne(() => Loft, (loft) => loft.pigeons)
  loft: Loft;

  @OneToMany(() => PigeonTime, (pt) => pt.pigeon)
  times: PigeonTime[];
}
