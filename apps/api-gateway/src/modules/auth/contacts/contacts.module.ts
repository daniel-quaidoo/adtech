import { forwardRef, Module } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { ContactsController } from './contacts.controller';
import { ClientConfigModule } from '@app/common/config';
import { UsersModule } from '../users/users.module';
import { Contact } from './entities/contact.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RouterModule } from '@nestjs/core';
import { appendSubPathsToBaseModule } from '@app/common/utils/helpers';
import { User } from '../users/entities/user.entity';

@Module({
    imports: [
        ClientConfigModule,
        forwardRef(() => UsersModule),
        TypeOrmModule.forFeature([Contact, User]),
        RouterModule.register([
        {
            path: '',
            children: [
            ...appendSubPathsToBaseModule('', [ContactsModule]),
            ],
        },
        ]),
    ],
    controllers: [ContactsController],
    providers: [ContactsService],
    exports: [ContactsService],
})
export class ContactsModule {}