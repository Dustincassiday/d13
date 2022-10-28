import { Injectable } from '@angular/core';
import { catchError, from, map, Observable, of, throwError } from 'rxjs';
import {
  Auth,
  authState,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
} from '@angular/fire/auth';

import { mapFirebaseUserToUser } from '../../../utils';
import { AbstractAuthenticationService } from '../../abstract';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationFirebaseService extends AbstractAuthenticationService {
  public currentUser$ = authState(this._auth).pipe(
    map((user) => {
      return user ? mapFirebaseUserToUser(user) : null;
    })
  );

  constructor(private readonly _auth: Auth) {
    super();
  }

  public login(username: string, password: string): Observable<void> {
    return from(
      signInWithEmailAndPassword(this._auth, username, password)
    ).pipe(
      map(() => void 0),
      catchError((err) => throwError(() => new Error(err.message)))
    );
  }

  public logout(): Observable<void> {
    return from(signOut(this._auth)).pipe(
      catchError((err) => throwError(() => new Error(err.message)))
    );
  }

  public resetPassword(email: string): Observable<void> {
    return from(sendPasswordResetEmail(this._auth, email)).pipe(
      catchError((err) => throwError(() => new Error(err.message)))
    );
  }

  public signup(email: string, password: string): Observable<void> {
    return from(
      createUserWithEmailAndPassword(this._auth, email, password)
    ).pipe(
      map(() => void 0),
      catchError((err) => throwError(() => new Error(err.message)))
    );
  }

  public updateProfile(): Observable<void> {
    return of();
  }
}
