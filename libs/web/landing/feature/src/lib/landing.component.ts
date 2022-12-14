import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SeoService } from '@d13/shared/data-access';

@Component({
  selector: 'd13-landing',
  template: `<h1>Welcome</h1>`,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingComponent {
  constructor(private readonly _seoService: SeoService) {
    this._seoService.setTitle('Welcome');
  }
}
