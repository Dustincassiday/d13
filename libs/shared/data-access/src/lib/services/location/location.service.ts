import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AbstractLocationService } from '../../data/abstract';
import { Location } from '../../models';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  public locations$!: Observable<Location[]>;

  constructor(private readonly _locationService: AbstractLocationService) {
    this.locations$ = _locationService.locations$;
  }

  public getLocationsByPostalCode(postalCode: string): Observable<void> {
    return this._locationService.getLocationsByPostalCode(postalCode);
  }
}
