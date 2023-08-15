import { User } from '../entities/user';

export abstract class UserRepository {
  abstract find(): Promise<User[]>;
  abstract findOne(id: string): Promise<User | null>;
}
