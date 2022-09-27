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
  @Input()
  public user: User | null = null;

  @Output()
  public btnClick = new EventEmitter<'login' | 'logout' | 'signup'>();

  public collapsed = true;
}
