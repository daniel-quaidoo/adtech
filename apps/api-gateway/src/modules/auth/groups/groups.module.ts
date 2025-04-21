import { RouterModule } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { forwardRef, Module } from '@nestjs/common';

// config
import { ClientConfigModule } from '@app/common/config';

// helpers
import { appendSubPathsToBaseModule } from '@app/common/utils/helpers';

// service
import { GroupsService } from './groups.service';

// controller
import { GroupsController } from './groups.controller';

// module
import { UsersModule } from '../users/users.module';
import { PermissionsModule } from '../permissions/permissions.module';

// entity
import { Group } from './entities/group.entity';
import { UserGroup } from './entities/user-group.entity';
import { UserGroupPermission } from './entities/user-group-permissions.entity';


@Module({
     imports: [
        ClientConfigModule,
        TypeOrmModule.forFeature([Group, UserGroup, UserGroupPermission]),
        forwardRef(() => PermissionsModule),
        forwardRef(() => UsersModule),
        RouterModule.register([
        {
            path: '',
            children: [
            ...appendSubPathsToBaseModule('', [GroupsModule]),
            ],
        },
        ]),
    ],
    controllers: [GroupsController],
    providers: [GroupsService],
})
export class GroupsModule {}