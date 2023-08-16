import { User, UserRepository } from '@wsdev/account/domain';

export class UserRepositoryMock implements UserRepository {
  async find(): Promise<User[]> {
    return [];
  }

  async findOne(id: string): Promise<User | null> {
    return {
      id: '',
      email: '',
      username: '',
      createdAt: new Date(),
      updatedAt: new Date(),
    };
  }
}
