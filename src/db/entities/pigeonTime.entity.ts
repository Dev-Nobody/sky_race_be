// Holds flight and landing time of a pigeon for a day.

import { Entity, Column, ManyToOne } from "typeorm";
import { BaseEntity } from "./common/base.entity";
import { Pigeon } from "./pigeon.entity";
import { DayResult } from "./dayResult.entity";

@Entity("pigeon_times")
export class PigeonTime extends BaseEntity {
  @ManyToOne(() => Pigeon, (pigeon) => pigeon.times)
  pigeon: Pigeon;

  @ManyToOne(() => DayResult, (result) => result.pigeon_times)
  day_result: DayResult;

  @Column({ type: "timestamp" })
  start_time: Date;

  @Column({ type: "timestamp" })
  end_time: Date;

  @Column({ type: "int", nullable: true })
  duration_minutes: number; // Optional: calculate difference and store
}
