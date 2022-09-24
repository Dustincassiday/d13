import {
  ChangeDetectionStrategy,
  Component,
  TemplateRef,
  ViewChild,
} from '@angular/core';
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

  public handleHeaderBtnClick(modalRef: TemplateRef<unknown>) {
    this._modalService.open(modalRef, {
      centered: true,
    });
  }
}
