import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

// entity
import { User } from "../../users/entities/user.entity";


@Entity('contacts')
export class Contact{
    @PrimaryGeneratedColumn('uuid')
    id: String;

    @ManyToOne(() => User, (user) => user.contacts, { nullable: true })
    @JoinColumn({name: 'user_id'})
    user: User | null;
    
    @Column({ length: 128 })
    first_name: String;

    @Column({ length: 128 })
    last_name: String;

    @Column({ length: 128 })
    email: String;

    @Column({ length: 128 })
    relation: String;

    @Column({ length: 128 })
    number: String;

    @Column({ default: false })
    is_emergency_contact: boolean;
}