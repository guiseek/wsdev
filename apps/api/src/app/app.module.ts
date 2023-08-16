import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AccountResourceUserModule } from '@wsdev/account/resource-user';
import { UserImpl } from '@wsdev/account/data-source';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { env } from '../envs/env';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      username: 'postgres',
      password: 'postgres',
      database: 'postgres',
      synchronize: true,
      entities: [UserImpl],
      port: 5432,
    }),
    AccountResourceUserModule.forFeature(env.production),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
