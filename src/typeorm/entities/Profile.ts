/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'user_profiles' })
export class Profile {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column()
  firstName: string;
  
  @Column()
  lastName: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ nullable: true })
  authStrategy: string;

  
}
