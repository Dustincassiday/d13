import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  catchError,
  map,
  Observable,
  of,
  tap,
  throwError,
} from 'rxjs';
import { Location } from '../../../models';
import { AbstractLocationService, AbstractLoggerService } from '../../abstract';

@Injectable({
  providedIn: 'root',
})
export class LocationMockService extends AbstractLocationService {
  private _locations$ = new BehaviorSubject<Location[]>([]);

  public get locations$(): Observable<Location[]> {
    return this._locations$.asObservable();
  }

  constructor(private readonly _logger: AbstractLoggerService) {
    super();
  }

  public getLocationsByPostalCode(postalCode: string): Observable<void> {
    this._locations$.next(this._getMockLocations());
    return of(void 0).pipe(
      map(() => this._throwMockInvalidPostalCodeError(postalCode)),
      catchError((err) => throwError(() => new Error(err.message)))
    );
  }

  public getLocation(id: string): Observable<Location | null> {
    return of(this._getLocation(id)).pipe(
      tap(
        (location) => location ?? this._throwError(`Invalid location Id: ${id}`)
      ),
      catchError((err) => throwError(() => new Error(err.message)))
    );
  }

  private _throwMockInvalidPostalCodeError(postalCode: string): void {
    if (postalCode === '66666') {
      this._throwError('Location Error');
    }
  }

  private _throwError(message: string) {
    this._logger.error(message, 'LocationMockService');
    throw new Error(message);
  }

  private _getLocation(id: string): Location | null {
    const location = this._getMockLocations().find(
      (location) => location.id === id
    );
    return location ? location : null;
  }

  private _getMockLocations(): Location[] {
    return [
      {
        id: 'lv123',
        name: 'Las Vegas Demo Location',
        address1: '123 some st',
        address2: 'suite 101',
        city: 'Las Vegas',
        state: 'NV',
        displayAddress: '123 Some St, Las Vegas NV, 89166',
        coordinates: { lat: 36.1716, lng: -115.1391 },
        postalCode: '89166',
        metadata: [{ isOpen: true }],
      },
      {
        id: 'sp123',
        name: 'St Petersburg Demo Location',
        address1: '445 another st',
        address2: '',
        city: 'St Petersburg',
        state: 'FL',
        displayAddress: '445 Another St, St Petersburg, FL, 33710',
        postalCode: '33710',
        coordinates: { lat: 27.7676, lng: -82.6403 },
        metadata: [{ isOpen: false }],
      },
    ];
  }
}
