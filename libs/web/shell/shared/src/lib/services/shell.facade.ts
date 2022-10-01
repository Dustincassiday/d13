import { Injectable, TemplateRef } from '@angular/core';
import { AuthenticationService, User } from '@d13/shared/data-access';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  BehaviorSubject,
  catchError,
  combineLatest,
  EMPTY,
  map,
  Observable,
} from 'rxjs';
import { ShellViewmodel } from '../models';

@Injectable({
  providedIn: 'root',
})
export class ShellFacade {
  private _initialViewState: ShellViewmodel = {
    user: null,
    authInitiated: false,
    errors: [],
  };

  private _viewState$ = new BehaviorSubject<ShellViewmodel>(
    this._initialViewState
  );

  public readonly vm$: Observable<ShellViewmodel>;

  constructor(
    private readonly _authService: AuthenticationService,
    private readonly _modalService: NgbModal
  ) {
    this.vm$ = combineLatest([
      this._authService.currentUser$,
      this._viewState$,
    ]).pipe(map(([user, vm]) => this._digestViewState(user, vm)));
  }

  public login(email: string, password: string): void {
    this._viewState$.next({
      ...this._viewState$.value,
      authInitiated: true,
      errors: [],
    });
    this._authService.login(email, password).pipe(
      catchError((err) => {
        this._viewState$.next({
          ...this._viewState$.value,
          errors: [{ type: 'auth', message: err.message }],
        });
        return EMPTY;
      })
    );
  }

  public logout(): void {
    this._authService.logout();
  }

  public signup(email: string, password: string): void {
    this._viewState$.next({
      ...this._viewState$.value,
      authInitiated: true,
      errors: [],
    });
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

  private _digestViewState(
    user: User | null,
    viewState: ShellViewmodel
  ): ShellViewmodel {
    if (viewState.authInitiated && user) {
      this._viewState$.next({ ...viewState, authInitiated: false });
      this.dismissAllModals();
    }
    return { ...viewState, user };
  }
}
