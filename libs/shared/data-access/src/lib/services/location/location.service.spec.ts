import { LocationMockService, LoggerMockService } from '../../data/mocks';
import { LocationService } from './location.service';
describe('LocationService', () => {
  let sut: LocationService;
  let mockDataService: LocationMockService;
  let mockLoggerService: LoggerMockService;

  beforeEach(() => {
    mockLoggerService = new LoggerMockService();
    mockDataService = new LocationMockService(mockLoggerService);
    sut = new LocationService(mockDataService);
  });

  it('should be created', () => {
    expect(sut).toBeTruthy();
  });

  describe('locations$', () => {
    it('should be empty array on init', (done) => {
      sut.locations$.subscribe((location) => {
        expect(location.length).toBe(0);
        done();
      });
    });
  });

  describe('getLocationsByPostalCode', () => {
    it('should populate locations$ with search results', (done) => {
      sut.getLocationsByPostalCode('12345').subscribe();
      sut.locations$.subscribe((location) => {
        expect(location.length).toBeGreaterThan(0);
        done();
      });
    });
  });
});
