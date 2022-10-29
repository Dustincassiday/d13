/* eslint-disable @typescript-eslint/no-explicit-any */

import { LocationService } from '@d13/shared/data-access';
import { Observable, of } from 'rxjs';
import { LocationFacade } from './location.facade';

describe('LocationFacade', () => {
  let sut: LocationFacade;
  let mockedLocationService: LocationService;
  let mapLoaded: Observable<boolean>;

  beforeEach(async () => {
    mockedLocationService = {} as any;
    mapLoaded = of(false);
    sut = new LocationFacade(mapLoaded, mockedLocationService);
  });

  it('should create', () => {
    expect(sut).toBeTruthy();
  });
});
