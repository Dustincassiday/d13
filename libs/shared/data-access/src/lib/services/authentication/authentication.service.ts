import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationMockService } from '../../data';
import { User } from '../../models';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  public currentUser$!: Observable<User | null>;

  constructor(private readonly _authService: AuthenticationMockService) {
    this.currentUser$ = _authService.currentUser$;
  }

  public login(email: string, password: string): Observable<User> {
    return this._authService.login(email, password);
  }

  public logout(): Observable<void> {
    return this._authService.logout();
  }

  public resetPassword(email: string) {
    return this._authService.resetPassword(email);
  }

  public signup(email: string, password: string): Observable<User> {
    return this._authService.signup(email, password);
  }
}
