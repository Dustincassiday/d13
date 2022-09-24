import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'd13-login-modal',
  templateUrl: './login-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginModalComponent {
  @Input() public modalRef!: NgbModalRef;

  @Output() public loginBtnClick = new EventEmitter();
  @Output() public newUserBtnClick = new EventEmitter();
  @Output() public forgotPasswordBtnClick = new EventEmitter();
}
