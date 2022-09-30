import { Injectable, TemplateRef } from '@angular/core';
import { AbstractAuthenticationService, User } from '@d13/shared/data-access';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  BehaviorSubject,
  catchError,
  combineLatest,
  EMPTY,
  map,
  Observable,
} from 'rxjs';
import { AlertModel } from '../models';
import { ShellViewmodel } from '../models/shell.viewmodel';

@Injectable({
  providedIn: 'root',
})
export class ShellFacade {
  private _authInitiated$: BehaviorSubject<boolean>;
  private _errors$: BehaviorSubject<AlertModel[]>;
  public vm$: Observable<ShellViewmodel>;

  constructor(
    private readonly _authService: AbstractAuthenticationService,
    private readonly _modalService: NgbModal
  ) {
    this._authInitiated$ = new BehaviorSubject(false);
    this._errors$ = new BehaviorSubject<AlertModel[]>([]);

    this.vm$ = combineLatest([
      this._authService.currentUser$,
      this._authInitiated$,
      this._errors$,
    ]).pipe(
      map(([user, auth, errors]) => this._processViewState(user, auth, errors))
    );
  }

  public login(email: string, password: string): void {
    this._authInitiated$.next(true);
    this._errors$.next([]);
    this._authService.login(email, password).pipe(
      catchError((err) => {
        this._errors$.next([
          ...this._errors$.value,
          { type: 'auth', message: err.message },
        ]);
        return EMPTY;
      })
    );
  }

  public logout(): void {
    this._authService.logout();
  }

  public signup(email: string, password: string): void {
    this._authInitiated$.next(true);
    this._authService.signup(email, password);
  }

  public resetPassword(email: string): void {
    this._authService.resetPassword(email);
    this.dismissAllModals();
  }

  public openModal(modalRef: TemplateRef<unknown>): void {
    this._modalService.open(modalRef, {
      centered: true,
      // scrollable: true,
    });
  }

  public dismissAllModals(): void {
    if (this._modalService.hasOpenModals()) {
      this._modalService.dismissAll();
    }
  }

  private _processViewState(
    user: User | null,
    authInitiated: boolean,
    errors: AlertModel[]
  ): ShellViewmodel {
    if (authInitiated && user) {
      this._authInitiated$.next(false);
      this.dismissAllModals();
    }
    return {
      user,
      authInitiated,
      errors,
    };
  }
}
