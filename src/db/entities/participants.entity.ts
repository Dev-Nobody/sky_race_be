import { Entity, Column, ManyToOne, JoinColumn } from "typeorm";
import { BaseEntity } from "src/db/entities/common/base.entity";
import { User } from "src/db/entities/user.entity";
import { Tournament } from "./tournament.entity";

@Entity("participants")
export class Participant extends BaseEntity {
  @ManyToOne(() => User)
  @JoinColumn({ name: "user_id" })
  user: User;

  @ManyToOne(() => Tournament)
  @JoinColumn({ name: "tournament_id" })
  tournament: Tournament;

  @Column({ type: "int" })
  number_of_pigeons: number;

  @Column({ type: "varchar", nullable: true })
  profile_image_url: string;
}
