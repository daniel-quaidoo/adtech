import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

// entity
import { User } from "../../users/entities/user.entity";
import { Permission } from "../../permissions/entities/permission.entity";

@Entity({name: "role"})
export class Role{
    @PrimaryGeneratedColumn()
    role_id: number;

    @Column({type: "varchar", length: 80, unique: true})
    name: string;

    @Column({type: "varchar", length: 80})
    alias: string;

    @Column({type: "text"})
    description: string;

    @ManyToMany(() => User, (user) => user.roles)
    users: User[];

    @ManyToMany(() => Permission, (permission) => permission.roles, {cascade: true})
    @JoinTable({name: 'role_permissions'})
    permissions: Permission[]
}