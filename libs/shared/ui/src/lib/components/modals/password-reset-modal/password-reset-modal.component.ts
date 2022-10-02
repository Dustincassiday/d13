import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
} from '@angular/core';
import { AlertModel } from '@d13/web/shell/shared';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'd13-password-reset-modal',
  templateUrl: './password-reset-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PasswordResetModalComponent implements OnDestroy {
  @Input() public modalRef!: NgbModalRef;
  @Input() public alerts!: AlertModel[];

  @Output() public resetPasswordBtnClick = new EventEmitter();
  @Output() public closeModal = new EventEmitter();

  public ngOnDestroy(): void {
    this.closeModal.emit();
  }
}
