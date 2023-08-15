import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { UserImpl } from '@wsdev/account/data-source';
import { UserRepository, UserRepositoryImpl } from '@wsdev/account/data-source';
import { AccountResourceUserController } from './account-resource-user.controller';

@Module({
  imports: [TypeOrmModule.forFeature([UserImpl])],
  controllers: [AccountResourceUserController],
  providers: [
    {
      provide: UserRepository,
      useFactory(ds: DataSource) {
        const repository = ds.getRepository(UserImpl)
        return new UserRepositoryImpl(repository);
      },
      inject: [DataSource],
    },
  ],
  exports: [],
})
export class AccountResourceUserModule {}
