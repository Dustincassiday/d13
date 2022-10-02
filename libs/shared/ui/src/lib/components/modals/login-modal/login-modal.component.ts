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
  selector: 'd13-login-modal',
  templateUrl: './login-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginModalComponent implements OnDestroy {
  @Input() public modalRef!: NgbModalRef;
  @Input() public alerts!: AlertModel[];

  @Output() public loginBtnClick = new EventEmitter();
  @Output() public newUserBtnClick = new EventEmitter();
  @Output() public forgotPasswordBtnClick = new EventEmitter();
  @Output() public closeModal = new EventEmitter();

  public ngOnDestroy(): void {
    this.closeModal.emit();
  }
}
