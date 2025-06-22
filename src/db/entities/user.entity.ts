import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Index,
  OneToMany,
} from "typeorm";
import { BaseEntity } from "./common/base.entity";
import { Tournament } from "./tournament.entity";
// import { Loft } from "./loft.entity";

export enum UserRole {
  ADMIN = "admin",
  ORGANIZER = "organizer",
  USER = "user",
}

@Entity("users")
export class User extends BaseEntity {
  @Column({ length: 255 })
  full_name: string;

  @Column({ unique: true, length: 255 })
  email: string;

  @Column()
  password_hash: string;

  @Column({
    type: "enum",
    enum: UserRole,
    default: UserRole.USER,
  })
  role: UserRole;

  @Column("boolean", { default: false })
  is_verified: boolean;

  @Column({ nullable: true })
  otp_code: string; // Optional OTP for verification process

  @OneToMany(() => Tournament, (tournament) => tournament.organizer)
  tournaments: Tournament[];

  // @OneToMany(() => Loft, (loft) => loft.user)
  // lofts: Loft[];
}
