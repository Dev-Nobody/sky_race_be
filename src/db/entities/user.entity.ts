import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Index,
  OneToMany,
} from 'typeorm';
import { BaseEntity } from './common/base.entity';

@Entity('users')
export class User extends BaseEntity {
  @Column({ length: 255 })
  full_name: string;

  @Column({ unique: true, length: 255 })
  email: string;

  @Column()
  password_hash: string;

  @Column('boolean', { default: false })
  is_verified: boolean;

  @Column({ nullable: true })
  otp_code: string; // Optional OTP for verification process
}
