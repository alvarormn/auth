import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../../models/user';

@Injectable({ providedIn: 'root' })
export class AuthService {
  login(username: string, password: string): Observable<User> {
    // TODO: replace with real authentication logic
    const user: User = { id: 1, username };
    return of(user);
  }
}
