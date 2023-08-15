import { User, UserRepository } from '@wsdev/account/domain';
import { Repository } from 'typeorm';

export class UserRepositoryImpl implements UserRepository {
  constructor(private readonly repository: Repository<User>) {}

  find(){
    return this.repository.find();
  }

  findOne(id: string) {
    return this.repository.findOne({ where: { id } });
  }
}
