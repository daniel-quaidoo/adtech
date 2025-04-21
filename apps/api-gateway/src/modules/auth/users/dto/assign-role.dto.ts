import { ArrayNotEmpty, IsArray, IsUUID } from "class-validator";


export class AssignRoleDto{

    @IsArray()
    @ArrayNotEmpty()
    roleIds: number[];
}