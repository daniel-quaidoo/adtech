import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PassportModule } from "@nestjs/passport";
import { ConfigModule, ConfigService } from "@nestjs/config";

// auth
import { JwtStrategy } from "./core/strategies/jwt.strategy";
import { LocalStrategy } from "./core/strategies/local.strategy";

// config
import { ClientConfigModule } from "@app/common/config";

// controller
import { AuthController } from "./auth.controller";

// service
import { AuthService } from "./auth.service";

// module
import { UsersModule } from "./users/users.module";
import { RolesModule } from "./roles/roles.module";
import { GroupsModule } from "./groups/groups.module";
import { MailModule } from "../messaging/mail/mail.module";
import { ContactsModule } from "./contacts/contacts.module";
import { PermissionsModule } from "./permissions/permissions.module";

// entity
import { UserCredentials } from "./users/entities/user-credentials.entity";

@Module({
  imports: [
    ConfigModule,
    MailModule,
    UsersModule,
    RolesModule,
    GroupsModule,
    ContactsModule,
    PassportModule,
    PermissionsModule,
    ClientConfigModule,
    TypeOrmModule.forFeature([UserCredentials]),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: { expiresIn: '1h' },
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [AuthController],
  providers: [
    LocalStrategy,
    JwtStrategy,
    AuthService
  ],
})

export class AuthModule {}