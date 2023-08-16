import { Observable } from 'rxjs';

export abstract class HttpService {
  abstract get<T>(
    url: string,
    params?: Record<string, PropertyKey>
  ): Observable<T>;
}
