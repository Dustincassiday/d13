import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAP_LOADED } from '@d13/shared/data-access';
import { LocationFacade, LocationViewmodel } from '@d13/web/location/shared';
import { Observable, subscribeOn } from 'rxjs';

@Component({
  selector: 'd13-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LocationComponent {
  public vm$: Observable<LocationViewmodel>;
  constructor(
    @Inject(MAP_LOADED) public mapLoaded$: Observable<boolean>,
    private readonly _facade: LocationFacade
  ) {
    this.vm$ = _facade.vm$;
    this._facade.getLocationsByPostalCode('23233');

    mapLoaded$.subscribe((m) => {
      console.log('loaded', m);
    });
  }
}
