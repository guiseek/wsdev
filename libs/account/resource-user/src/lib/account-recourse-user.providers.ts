import {
  UserImpl,
  UserRepository,
  UserRepositoryImpl,
  UserRepositoryMock,
} from '@wsdev/account/data-source';
import { DataSource } from 'typeorm';

export function getUserProviders(production: boolean) {
  // prettier-ignore
  return production ? {
    provide: UserRepository,
    useFactory(ds: DataSource) {
      const repository = ds.getRepository(UserImpl);
      return new UserRepositoryImpl(repository);
    },
    inject: [DataSource],
  } : {
    provide: UserRepository,
    useClass: UserRepositoryMock,
  }
}
