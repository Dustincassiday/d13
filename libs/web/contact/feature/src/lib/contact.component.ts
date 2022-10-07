import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SeoService } from '@d13/shared/data-access';

@Component({
  selector: 'd13-contact',
  templateUrl: './contact.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {
  constructor(private readonly _seoService: SeoService) {
    this._seoService.setTitle('Contact us');
  }
}
