import { forwardRef, Module } from '@nestjs/common';
import { PermissionsController } from './permissions.controller';
import { PermissionsService } from './permissions.service';
import { ClientConfigModule } from '@app/common/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { RouterModule } from '@nestjs/core';
import { appendSubPathsToBaseModule } from '@app/common/utils/helpers';
import { Permission } from './entities/permission.entity';
import { GroupsModule } from '../groups/groups.module';

@Module({
  imports: [
      ClientConfigModule,
      TypeOrmModule.forFeature([Permission]),
      forwardRef(() => GroupsModule),
      RouterModule.register([
        {
          path: '',
          children: [
            ...appendSubPathsToBaseModule('', [PermissionsModule]),
          ],
        },
      ]),
    ],
  providers: [PermissionsService],
  controllers: [PermissionsController],
  exports: [PermissionsService, TypeOrmModule]
})
export class PermissionsModule {}
