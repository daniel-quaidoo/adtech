import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import { ClientConfigModule } from '@app/common/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { RouterModule } from '@nestjs/core';
import { appendSubPathsToBaseModule } from '@app/common/utils/helpers';
import { Role } from './entities/role.entity';
import { PermissionsModule } from '../permissions/permissions.module';

@Module({
  imports: [
      ClientConfigModule,
      PermissionsModule,
      TypeOrmModule.forFeature([Role]),
      RouterModule.register([
        {
          path: '',
          children: [
            ...appendSubPathsToBaseModule('', [RolesModule]),
          ],
        },
      ]),
    ],
  providers: [RolesService],
  controllers: [RolesController],
  exports: [RolesService, TypeOrmModule]
})
export class RolesModule {}
