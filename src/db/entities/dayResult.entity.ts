// Tracks a single day’s pigeon status.

import { Entity, Column, ManyToOne, OneToMany } from "typeorm";
import { BaseEntity } from "./common/base.entity";
import { Tournament } from "./tournament.entity";
import { PigeonTime } from "./piegonTime.entity";

@Entity("day_results")
export class DayResult extends BaseEntity {
  @Column()
  date: Date;

  @ManyToOne(() => Tournament, (tournament) => tournament.results)
  tournament: Tournament;

  @OneToMany(() => PigeonTime, (pt) => pt.day_result)
  pigeon_times: PigeonTime[];
}
