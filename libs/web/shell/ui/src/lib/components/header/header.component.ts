import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { User } from '@d13/shared/data-access';

@Component({
  selector: 'd13-header',
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  @Input() public user: User | null = null;

  @Output() public loginBtnClick = new EventEmitter();
  @Output() public signupBtnClick = new EventEmitter();
  @Output() public logoutBtnClick = new EventEmitter();

  public collapsed = true;
}
