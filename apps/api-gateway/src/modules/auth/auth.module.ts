import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { UsersModule } from "./users/users.module";
import { RolesModule } from './roles/roles.module';
import { PermissionsService } from './permissions/permissions.service';
import { PermissionsModule } from './permissions/permissions.module';
import { UsersService } from "./users/users.service";
import { RolesService } from "./roles/roles.service";
import { ContactsService } from "./contacts/contacts.service";
import { GroupsService } from "./groups/groups.service";
import { GroupsModule } from "./groups/groups.module";
import { ContactsModule } from "./contacts/contacts.module";


@Module({
    imports: [UsersModule, RolesModule, PermissionsModule, GroupsModule, ContactsModule],
    controllers: [AuthController],
    providers: [AuthService, UsersService, RolesService,PermissionsService],
  })
  export class AuthModule {}