import { User, UserService } from '@wsdev/account/domain';
import { HttpService } from '@wsdev/shared/data-access';

export class UserServiceImpl implements UserService {
  constructor(private readonly httpService: HttpService) {}

  findOne(id: string) {
    return this.httpService.get<User>(`/api/users/${id}`);
  }

  find() {
    return this.httpService.get<User[]>(`/api/users`);
  }
}
