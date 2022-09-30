import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { User } from '../../../models';
import {
  AbstractAuthenticationService,
  AbstractLoggerService,
} from '../../abstract';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationMockService extends AbstractAuthenticationService {
  private _currentUser$ = new BehaviorSubject<User | null>(null);

  public get currentUser$(): Observable<User | null> {
    return this._currentUser$.asObservable();
  }

  constructor(private readonly _logger: AbstractLoggerService) {
    super();
    this._logger.log('MOCK AUTH SERVICE INITIALISED');
  }

  public login(username: string, password: string): Observable<User> {
    const user = this._getMockUser();
    user.metadata = [
      ...user.metadata,
      ...[{ loggedInWith: `user: ${username}, pass: ${password}` }],
    ];
    this._currentUser$.next(user);

    return of(user);
  }

  public logout(): Observable<void> {
    return of(this._currentUser$.next(null));
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public resetPassword(email: string): Observable<void> {
    return of();
  }

  public signup(email: string, password: string): Observable<User> {
    const user = this._getMockUser();
    user.metadata = [
      ...user.metadata,
      ...[{ signedUpWith: `email: ${email} pass: ${password}` }],
    ];
    this._currentUser$.next(user);
    return of(user);
  }

  public updateProfile(): Observable<void> {
    return of();
  }

  private _getMockUser(): User {
    return {
      id: '12345',
      verified: true,
      anonymous: false,
      name: 'Test User',
      email: 'testuser@test.com',
      phone: null,
      photoUrl: null,
      metadata: [],
    };
  }
}
