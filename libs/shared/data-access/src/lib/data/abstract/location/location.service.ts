import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Location } from '../../../models';

@Injectable({
  providedIn: 'root',
})
export abstract class AbstractLocationService {
  abstract locations$: Observable<Location[]>;

  abstract getLocationsByPostalCode(postalCode: string): Observable<void>;
}
