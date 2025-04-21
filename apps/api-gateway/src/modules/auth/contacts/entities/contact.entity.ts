import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../../users/entities/user.entity";


@Entity('contacts')
export class Contact{
    @PrimaryGeneratedColumn('uuid')
    id: String;

    @ManyToOne(() => User, (user) => user.contacts)
    @JoinColumn({name: 'user_id'})
    user: User;

    // @ManyToOne(() => User, (user) => user.contacts)
    // user: User;

    @Column({length: 128})
    emergency_contact_name : String;

    @Column({length: 128})
    emergency_contact_email : String;

    @Column({length: 128})
    emergency_contact_relation : String;

    @Column({length: 128})
    emergency_contact_number : String;
}