import { TypeOrmModule } from '@nestjs/typeorm';
import { DynamicModule, Module } from '@nestjs/common';
import { AccountResourceUserController } from './account-resource-user.controller';
import { getUserProviders } from './account-recourse-user.providers';
import { UserImpl } from '@wsdev/account/data-source';

@Module({
  imports: [TypeOrmModule.forFeature([UserImpl])],
  controllers: [AccountResourceUserController],
})
export class AccountResourceUserModule {
  static forFeature(production: boolean): DynamicModule {
    return {
      module: AccountResourceUserModule,
      providers: [getUserProviders(production)],
    };
  }
}
