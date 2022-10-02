import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
} from '@angular/core';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'd13-signup-modal',
  templateUrl: './signup-modal.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignupModalComponent implements OnDestroy {
  @Input() public modalRef!: NgbModalRef;

  @Output() public signupBtnClick = new EventEmitter();
  @Output() public loginBtnClick = new EventEmitter();
  @Output() public closeModal = new EventEmitter();

  public ngOnDestroy(): void {
    this.closeModal.emit();
  }
}
