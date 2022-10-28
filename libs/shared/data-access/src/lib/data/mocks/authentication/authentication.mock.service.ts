import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  catchError,
  map,
  Observable,
  of,
  throwError,
} from 'rxjs';
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
  }

  public login(username: string, password: string): Observable<void> {
    this._currentUser$.next(this._getMockUser(username, password));
    return of(void 0).pipe(
      map(() => this._throwMockError(username)),
      catchError((err) => throwError(() => new Error(err.message)))
    );
  }

  public logout(): Observable<void> {
    this._currentUser$.next(null);
    return of(void 0);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public resetPassword(email: string): Observable<void> {
    return of(void 0);
  }

  public signup(email: string, password: string): Observable<void> {
    this._currentUser$.next(this._getMockUser(email, password));
    return of(void 0);
  }

  private _throwMockError(email: string): void {
    if (email === 'error@error') {
      this._logger.error('Invalid login', 'AuthenticationMockService');
      throw new Error('Invalid login');
    }

    if (email === 'locked@error') {
      this._logger.error(
        'This account has been locked',
        'AuthenticationMockService'
      );
      throw new Error('This account has been locked');
    }
  }

  private _getMockUser(email: string, password: string): User {
    return {
      id: '12345',
      verified: true,
      anonymous: false,
      name: 'Test User',
      email,
      phone: null,
      photoUrl: null,
      metadata: [{ password }],
    };
  }
}
