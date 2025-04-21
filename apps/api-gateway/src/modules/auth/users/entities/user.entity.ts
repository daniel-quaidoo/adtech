
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, OneToMany } from "typeorm";

//enums
import { Gender } from "@lib/contracts/auth/users/enums/gender.enum";

// entity
import { Role } from "../../roles/entities/role.entity";
import { Group } from "../../groups/entities/group.entity";
import { Contact } from "../../contacts/entities/contact.entity";
import { UserGroup } from "../../groups/entities/user-group.entity";


@Entity({name: "user"})
export class User{
    @PrimaryGeneratedColumn('uuid')
    user_id: string;

    @Column({type: "varchar", length: 128})
    first_name: string;

    @Column({type: "varchar", length: 128})
    last_name: string;

    @Column({unique: true, type: "varchar", length: 80})
    email: String;

    @Column({type: "varchar", length: 50})
    phone_number: string;

    @Column({type: "varchar", length: 80})
    identification_number: string;

    @Column({type: "varchar", length: 128})
    photo_url: string;

    @Column({type: "enum", enum: Gender})
    gender: Gender;

    @Column({type: "date"})
    date_of_birth: Date;

    @Column({type: "varchar", length: 128})
    employer_name: string;

    @Column({type: "varchar", length: 128})
    occupation_status: string;

    @Column({type: "varchar", length: 128})
    occupation_location: string;

    @ManyToMany(() => Role, (role) => role.users)
    @JoinTable({name: 'user_roles'})
    roles: Role[]


    @OneToMany(() => UserGroup, (userGroup) => userGroup.user)
    userGroups: UserGroup[];


    @OneToMany(()=> Contact, (contact) => contact.user)
    contacts: Contact[];
}