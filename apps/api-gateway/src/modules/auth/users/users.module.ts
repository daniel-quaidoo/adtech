import { forwardRef, Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { ClientConfigModule } from '@app/common/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { RouterModule } from '@nestjs/core';
import { appendSubPathsToBaseModule } from '@app/common/utils/helpers';
import { User } from './entities/user.entity';
import { RolesModule } from '../roles/roles.module';
import { GroupsModule } from '../groups/groups.module';
import { ContactsModule } from '../contacts/contacts.module';


@Module({
  imports: [
    ClientConfigModule,
    RolesModule,
    GroupsModule,
    forwardRef(() => ContactsModule),
    TypeOrmModule.forFeature([User]),
    // TypeOrmModule.forRootAsync({
    //   imports: [ConfigModule],
    //   useFactory: async (configService: ConfigService) => {
    //     const isSslEnabled = configService.get<string>('DB_SSL') === 'true';

    //     return {
    //       type: 'postgres',
    //       host: configService.get<string>('DB_HOST'),
    //       port: configService.get<number>('DB_PORT'),
    //       username: configService.get<string>('DB_USERNAME'),
    //       password: configService.get<string>('DB_PASSWORD'),
    //       database: configService.get<string>('DB_DATABASE'),
    //       autoLoadEntities: true,
    //       synchronize: true,
    //       ...(isSslEnabled && {
    //         ssl: {
    //           rejectUnauthorized: true,
    //         },
    //       }),
    //     }
    //   },
    //   inject: [ConfigService],
    // }),
    RouterModule.register([
      {
        path: '',
        children: [
          ...appendSubPathsToBaseModule('', [UsersModule]),
        ],
      },
    ]),
  ],
  providers: [UsersService],
  controllers: [UsersController],
  exports: [UsersService, TypeOrmModule]
})
export class UsersModule {}
