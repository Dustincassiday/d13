/* eslint-disable @typescript-eslint/no-explicit-any */

import { LoggerMockService } from '../logger/logger.mock.service';
import { LocationMockService } from './location.mock.service';

describe('LocationMockService', () => {
  let sut: LocationMockService;
  let loggerService: LoggerMockService;

  beforeEach(() => {
    loggerService = new LoggerMockService();
    sut = new LocationMockService(loggerService);
  });

  it('should be created', () => {
    expect(sut).toBeTruthy();
  });

  describe('locations$', () => {
    it('should return an empty array', (done) => {
      sut.locations$.subscribe((location) => {
        expect(location.length).toBe(0);
        done();
      });
    });
  });

  describe('getLocationsByPostalCode', () => {
    it('should retreive locations for given postal code', (done) => {
      sut.getLocationsByPostalCode('12345').subscribe();
      sut.locations$.subscribe((locations) => {
        expect(locations.length).toBeGreaterThan(0);
        done();
      });
    });

    it('should throw an error on failed search', (done) => {
      sut.getLocationsByPostalCode('66666').subscribe({
        error: (err) => {
          expect(err.message).toBe('Location Error');
          done();
        },
      });
    });
  });
});
