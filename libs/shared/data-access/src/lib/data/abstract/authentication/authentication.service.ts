import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../../models';

@Injectable({
  providedIn: 'root',
})
export abstract class AbstractAuthenticationService {
  abstract currentUser$: Observable<User | null>;

  abstract login(username: string, password: string): Observable<void>;

  abstract logout(): Observable<void>;

  abstract resetPassword(email: string): Observable<void>;

  abstract signup(email: string, password: string): Observable<void>;
}
