import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  catchError,
  map,
  Observable,
  of,
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
      map(() => this._throwMockError(postalCode)),
      catchError((err) => throwError(() => new Error(err.message)))
    );
  }

  private _throwMockError(postalCode: string): void {
    if (postalCode === '66666') {
      this._logger.error('Location Error', 'LocationMockService');
      throw new Error('Location Error');
    }
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
        metadata: [{ isOpen: false }],
      },
    ];
  }
}
