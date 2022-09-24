import { ChangeDetectionStrategy, Component, TemplateRef } from '@angular/core';
import { ShellFacade, ShellViewmodel } from '@d13/web/shell/shared';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';

@Component({
  selector: 'd13-shell',
  templateUrl: './shell.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShellComponent {
  public vm$: Observable<ShellViewmodel>;
  constructor(
    private readonly _facade: ShellFacade,
    private readonly _modalService: NgbModal
  ) {
    this.vm$ = this._facade.vm$;
  }

  public openModal(modalRef: TemplateRef<unknown>) {
    if (this._modalService.hasOpenModals()) {
      this._modalService.dismissAll();
    }
    this._modalService.open(modalRef, {
      centered: true,
      // scrollable: true,
    });
  }

  public handleLoginFormSubmit(formValues: { [key: string]: string }) {
    console.log('Login', formValues);
  }

  public handleSignupFormSubmit(formValues: { [key: string]: string }) {
    console.log('Signup', formValues);
  }
}
