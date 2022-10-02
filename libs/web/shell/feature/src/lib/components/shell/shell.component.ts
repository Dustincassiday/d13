import {
  ChangeDetectionStrategy,
  Component,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { ShellFacade, ShellViewmodel } from '@d13/web/shell/shared';
import { Observable } from 'rxjs';

@Component({
  selector: 'd13-shell',
  templateUrl: './shell.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShellComponent {
  public vm$: Observable<ShellViewmodel>;

  @ViewChild('login')
  public loginRef!: TemplateRef<unknown>;

  @ViewChild('signup')
  public signupRef!: TemplateRef<unknown>;

  constructor(private readonly _facade: ShellFacade) {
    this.vm$ = this._facade.vm$;
  }

  public handleBtnClick(id: string): void {
    let modalRef: TemplateRef<unknown> | null = null;
    if (id === 'logout') {
      return this._facade.logout();
    }
    if (id === 'login') {
      modalRef = this.loginRef;
    }
    if (id === 'signup') {
      modalRef = this.signupRef;
    }

    this._dismissAllModals();

    if (modalRef) {
      this._facade.openModal(modalRef);
    }
  }

  public handleLoginFormSubmit(formValues: { [key: string]: string }) {
    this._facade.login(formValues['email'], formValues['password']);
  }

  public handleSignupFormSubmit(formValues: { [key: string]: string }) {
    this._facade.signup(formValues['email'], formValues['password']);
  }

  public handleCloseModal() {
    this._facade.resetErrors();
  }

  private _dismissAllModals(): void {
    this._facade.dismissAllModals();
  }
}
