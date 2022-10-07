import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SeoService } from '@d13/shared/data-access';

@Component({
  selector: 'd13-account',
  template: ` <h1>Account Settings</h1>`,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountComponent {
  constructor(private readonly _seoService: SeoService) {
    this._seoService.setTitle('Account');
  }
}
