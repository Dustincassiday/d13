import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SeoService } from '@d13/shared/data-access';

@Component({
  selector: 'd13-account',
  templateUrl: 'account.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountComponent {
  public tipForm = new FormGroup({
    amount: new FormControl(''),
  });

  constructor(private readonly _seoService: SeoService) {
    this._seoService.setTitle('Account');
  }
}
