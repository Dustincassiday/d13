import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ShellViewmodel } from '@d13/web/shell/shared';

@Component({
  selector: 'd13-footer',
  templateUrl: './footer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  @Input() vm: ShellViewmodel | null = null;
}
