import { Injectable, TemplateRef } from '@angular/core';
import { AbstractAuthenticationService, User } from '@d13/shared/data-access';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BehaviorSubject, combineLatest, map, Observable } from 'rxjs';
import { ShellViewmodel } from '../models/shell.viewmodel';

@Injectable({
  providedIn: 'root',
})
export class ShellFacade {
  private _authInitiated$: BehaviorSubject<boolean>;

  public vm$: Observable<ShellViewmodel>;

  constructor(
    private readonly _authService: AbstractAuthenticationService,
    private readonly _modalService: NgbModal
  ) {
    this._authInitiated$ = new BehaviorSubject(false);

    this.vm$ = combineLatest([
      this._authService.currentUser$,
      this._authInitiated$,
    ]).pipe(map(([user, auth]) => this._processViewState(user, auth)));
  }

  public login(email: string, password: string): void {
    this._authInitiated$.next(true);
    this._authService.login(email, password);
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
    authInitiated: boolean
  ): ShellViewmodel {
    if (authInitiated && user) {
      this._authInitiated$.next(false);
      this.dismissAllModals();
    }
    return {
      user,
      authInitiated,
    };
  }
}
