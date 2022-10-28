/* eslint-disable @typescript-eslint/no-explicit-any */

import { LocationFacade } from '@d13/web/location/shared';
import { of } from 'rxjs';

import { LocationComponent } from './location.component';

describe('LocationComponent', () => {
  let sut: LocationComponent;
  let facade: LocationFacade;

  beforeEach(async () => {
    facade = {
      locations$: of([]),
      getLocationsByPostalCode: jest.fn(),
    } as any;
    sut = new LocationComponent(facade);
  });

  it('should create', () => {
    expect(sut).toBeTruthy();
  });
});
