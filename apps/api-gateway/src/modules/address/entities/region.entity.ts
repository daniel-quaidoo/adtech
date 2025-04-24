import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

//entity
import { Country } from './country.entity';

@Entity('region')
export class Region {
    @PrimaryGeneratedColumn('uuid')
    region_id: string;

    @Column({ type: 'varchar', length: 255 })
    region_name: string;

    @ManyToOne(() => Country, { eager: true})
    @JoinColumn({name: 'country_id'})
    country: Country;

}