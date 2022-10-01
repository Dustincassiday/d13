import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'd13-footer',
  templateUrl: './footer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  public currentDate = Date.now();
}
