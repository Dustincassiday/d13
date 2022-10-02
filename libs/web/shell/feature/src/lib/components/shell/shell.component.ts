import { ChangeDetectionStrategy, Component, TemplateRef } from '@angular/core';
import { ShellFacade, ShellViewmodel } from '@d13/web/shell/shared';
import { Observable } from 'rxjs';

@Component({
  selector: 'd13-shell',
  templateUrl: './shell.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShellComponent {
  public vm$: Observable<ShellViewmodel>;

  constructor(private readonly _facade: ShellFacade) {
    this.vm$ = this._facade.vm$;
  }

  public handleOpenModal(modalRef: TemplateRef<unknown>): void {
    this._dismissAllModals();
    this._facade.openModal(modalRef);
  }

  public handleLogout(): void {
    this._facade.logout();
  }

  public handleLoginFormSubmit(formValues: { [key: string]: string }) {
    this._facade.login(formValues['email'], formValues['password']);
  }

  public handleSignupFormSubmit(formValues: { [key: string]: string }) {
    this._facade.signup(formValues['email'], formValues['password']);
  }

  public handlePasswordResetFormSubmit(email: string) {
    this._facade.resetPassword(email);
  }

  public handleCloseModal() {
    this._facade.resetErrors();
  }

  private _dismissAllModals(): void {
    this._facade.dismissAllModals();
  }
}
