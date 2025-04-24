import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Region } from "./region.entity";


@Entity('city')
export class City{
    @PrimaryGeneratedColumn('uuid')
    city_id: string;

    @Column({ type: 'varchar', length: 255 })
    city_name: string;


    @ManyToOne(() => Region, {eager: true})
    @JoinColumn({name: 'region_id'})
    region: Region;
}