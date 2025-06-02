import { Entity, Column, ManyToOne, OneToMany } from "typeorm";
import { BaseEntity } from "./common/base.entity";
import { User } from "./user.entity";
import { DayResult } from "./dayResult.entity";

@Entity("tournaments")
export class Tournament extends BaseEntity {
  @Column()
  name: string;

  @Column({ type: "timestamp" })
  start_time: Date;

  @Column({ type: "timestamp" })
  end_time: Date;

  @ManyToOne(() => User, (user) => user.tournaments)
  organizer: User;

  @OneToMany(() => DayResult, (result) => result.tournament)
  results: DayResult[];
}
