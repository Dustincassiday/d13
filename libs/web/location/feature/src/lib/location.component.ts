import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LocationFacade, LocationViewmodel } from '@d13/web/location/shared';
import { Observable } from 'rxjs';

@Component({
  selector: 'd13-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LocationComponent {
  public vm$: Observable<LocationViewmodel>;
  constructor(private readonly _facade: LocationFacade) {
    this.vm$ = _facade.vm$;
    this._facade.getLocationsByPostalCode('23233');
  }
}
