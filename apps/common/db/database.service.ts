import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

// service
// import { SsmConfigService } from '../services/aws/ssm/ssm.service';

@Injectable()
export class DatabaseConfigService implements TypeOrmOptionsFactory {
    // constructor(private readonly ssmConfigService: SsmConfigService) { }

    async createTypeOrmOptions(): Promise<TypeOrmModuleOptions> {
        // const db = (await this.ssmConfigService.loadParameters())["APP"]["DB"];

        return {
            type: 'mysql',
            // host: db.MY_DB_HOST,
            // port: Number(db.DB_PORT),
            // username: db.MY_DB_USERNAME,
            // password: db.MY_DB_PASSWORD,
            // database: db.MY_DB_DATABASE,
            synchronize: false,
            autoLoadEntities: true,
            host: configService.get<string>('DB_HOST'),
            port: configService.get<number>('DB_PORT'),
            username: configService.get<string>('DB_USERNAME'),
            password: configService.get<string>('DB_PASSWORD'),
            database: configService.get<string>('DB_DATABASE'),
        };
    }
}