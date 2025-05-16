import { RouterModule } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { forwardRef, Module } from '@nestjs/common';

// common
import { ClientConfigModule } from '../../../../..//common/config';
import { appendSubPathsToBaseModule } from '../../../../../common/utils/helpers';

// module
import { UsersModule } from '../users/users.module';

// entity
import { Contact } from './entities/contact.entity';
import { User } from '../users/entities/user.entity';

// service
import { ContactsService } from './contacts.service';

// controller
import { ContactsController } from './contacts.controller';

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