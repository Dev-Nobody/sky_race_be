// Represents individual pigeons owned by a Loft.
import { Entity, Column, ManyToOne, OneToMany, JoinColumn } from "typeorm";
import { BaseEntity } from "./common/base.entity";
// import { Loft } from "./loft.entity";

import { Participant } from "./participants.entity";
import { PigeonTime } from "./pigeonTime.entity";

@Entity("pigeons")
export class Pigeon extends BaseEntity {
  @Column()
  name: string;

  @Column({ nullable: true })
  color: string;

  @ManyToOne(() => Participant)
  @JoinColumn({ name: "participant_id" })
  participant: Participant;

  // @ManyToOne(() => Loft, (loft) => loft.pigeons)
  // loft: Loft;

  @OneToMany(() => PigeonTime, (pt) => pt.pigeon)
  times: PigeonTime[];
}
