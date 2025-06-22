import { Entity, Column, ManyToOne, OneToMany } from "typeorm";
import { BaseEntity } from "./common/base.entity";
import { User } from "./user.entity";
import { DayResult } from "./dayResult.entity";

@Entity("tournaments")
export class Tournament extends BaseEntity {
  @Column({ type: "varchar" })
  name: string;

  @Column({ type: "timestamp" })
  start_date: Date;

  @Column({ type: "timestamp" })
  end_date: Date;

  @Column({ type: "varchar" })
  start_time: string;

  @ManyToOne(() => User, (user) => user.tournaments)
  organizer: User;

  @OneToMany(() => DayResult, (result) => result.tournament)
  results: DayResult[];
}
