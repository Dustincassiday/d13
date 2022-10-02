import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SeoService } from '@d13/shared/data-access';

@Component({
  selector: 'd13-landing',
  template: ` <p>landing works!</p> `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingComponent {
  constructor(private readonly _seoService: SeoService) {
    this._seoService.setTitle('D13 Landing');
  }
}
