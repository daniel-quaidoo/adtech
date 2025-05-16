import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

// service
// import { SsmConfigService } from '../services/aws/ssm/ssm.service';

@Injectable()
export class DatabaseConfigService implements TypeOrmOptionsFactory {
    constructor(
        // private readonly ssmConfigService: SsmConfigService,
        private readonly configService: ConfigService,
    ) { }

    async createTypeOrmOptions(): Promise<TypeOrmModuleOptions> {
        // const db = (await this.ssmConfigService.loadParameters())["APP"]["DB"];

        return {
            // type: 'mysql',
            // host: db.MY_DB_HOST,
            // port: Number(db.DB_PORT),
            // username: db.MY_DB_USERNAME,
            // password: db.MY_DB_PASSWORD,
            // database: db.MY_DB_DATABASE,
            type: 'postgres',
            host: this.configService.get<string>('DB_HOST'),
            port: Number(this.configService.get<number>('DB_PORT')),
            username: this.configService.get<string>('DB_USERNAME'),
            password: this.configService.get<string>('DB_PASSWORD'),
            database: this.configService.get<string>('DB_DATABASE'),
            autoLoadEntities: true,
            synchronize: true, // using migrations now
            migrations: ['dist/migrations/*.js'],
        };
    }
}