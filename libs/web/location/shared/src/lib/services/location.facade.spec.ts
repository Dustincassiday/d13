/* eslint-disable @typescript-eslint/no-explicit-any */

import { LocationService } from '@d13/shared/data-access';
import { LocationFacade } from '@d13/web/location/shared';

describe('LocationFacade', () => {
  let sut: LocationFacade;
  let mockedLocationService;
  LocationService;

  beforeEach(async () => {
    mockedLocationService = {} as any;
    sut = new LocationFacade(mockedLocationService);
  });

  it('should create', () => {
    expect(sut).toBeTruthy();
  });
});
