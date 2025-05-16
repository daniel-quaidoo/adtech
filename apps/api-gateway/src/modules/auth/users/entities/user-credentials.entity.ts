import {
  Entity,
  Column,
  OneToOne,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./user.entity";

@Entity("user_credentials")
export class UserCredentials {
  @PrimaryGeneratedColumn("uuid")
  user_credentials_id: string;

  @OneToOne(() => User, (user) => user.credentials)
  user: User;

  @Column({ nullable: true })
  password?: string;

  @Column({ nullable: true })
  login_provider?: string;

  @Column({ nullable: true })
  verification_token?: string;

  @Column({ nullable: true })
  reset_token?: string;

  @Column({ nullable: true })
  is_subscribed_token?: string;

  @Column({ default: false })
  is_disabled?: boolean;

  @Column({ default: false })
  is_verified?: boolean;

  @Column({ default: false })
  is_subscribed?: boolean;

  @Column({ default: false })
  is_onboarded?: boolean;

  @Column({ default: false })
  is_approved?: boolean;

  @Column({ default: false })
  is_rejected?: boolean;

  @Column({ type: "timestamptz", nullable: true })
  last_login_time: Date;

  @Column({ type: "timestamptz", nullable: true })
  current_login_time: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
