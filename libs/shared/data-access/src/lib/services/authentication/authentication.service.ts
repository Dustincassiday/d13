import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { AbstractAuthenticationService } from '../../data/abstract';
import { User } from '../../models';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  public currentUser$!: Observable<User | null>;

  constructor(private readonly _authService: AbstractAuthenticationService) {
    this.currentUser$ = _authService.currentUser$;
  }

  public login(email: string, password: string): Observable<void> {
    return this._authService.login(email, password);
  }

  public logout(): Observable<void> {
    return from(this._authService.logout());
  }

  public resetPassword(email: string): Observable<void> {
    return this._authService.resetPassword(email);
  }

  public signup(email: string, password: string): Observable<void> {
    return this._authService.signup(email, password);
  }
}
