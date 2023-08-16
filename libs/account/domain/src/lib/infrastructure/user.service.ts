import { Observable } from 'rxjs';
import { User } from '../entities/user';

export abstract class UserService {
  abstract findOne(id: string): Observable<User | null>;
  abstract find(): Observable<User[]>;
}
