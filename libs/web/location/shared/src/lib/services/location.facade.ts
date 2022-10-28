import { Injectable } from '@angular/core';
import { LocationService, Location } from '@d13/shared/data-access';
import { BehaviorSubject, combineLatest, map, Observable } from 'rxjs';
import { LocationViewmodel } from '../models';

@Injectable({
  providedIn: 'root',
})
export class LocationFacade {
  private _initialViewState: LocationViewmodel = {
    locations: [],
    locationSearchInitiated: false,
  };

  private _viewState$ = new BehaviorSubject<LocationViewmodel>(
    this._initialViewState
  );

  public readonly vm$: Observable<LocationViewmodel>;

  constructor(private readonly _locationService: LocationService) {
    this.vm$ = combineLatest([
      this._locationService.locations$,
      this._viewState$,
    ]).pipe(map(([locations, vm]) => this._digestViewState(locations, vm)));
  }

  public getLocationsByPostalCode(postalCode: string) {
    this._viewState$.next({
      ...this._viewState$.value,
      locationSearchInitiated: true,
    });
    this._locationService.getLocationsByPostalCode(postalCode).subscribe();
  }

  private _digestViewState(
    locations: Location[],
    viewState: LocationViewmodel
  ): LocationViewmodel {
    if (viewState.locationSearchInitiated) {
      this._viewState$.next({ ...viewState, locationSearchInitiated: false });
    }
    return { ...viewState, locations };
  }
}
