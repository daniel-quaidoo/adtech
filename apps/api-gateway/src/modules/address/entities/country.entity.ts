import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('country')
export class Country {
    @PrimaryGeneratedColumn('uuid')
    country_id: string;

    @Column({ unique: true })
    name: string;
}