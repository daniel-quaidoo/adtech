import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// service
import { DatabaseConfigService } from './database.service';

// module
// import { SsmConfigModule } from '../services/aws/ssm/ssm.module';

@Module({
  imports: [
    // SsmConfigModule,
    TypeOrmModule.forRootAsync({
      // imports: [SsmConfigModule],
      useClass: DatabaseConfigService,
    }),
  ],
})
export class DatabaseModule {}
