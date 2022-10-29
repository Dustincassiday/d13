import { LocationCardComponent } from './location-card.component';

describe('LocationCardComponent', () => {
  let sut: LocationCardComponent;

  beforeEach(async () => {
    sut = new LocationCardComponent();
  });

  it('should create', () => {
    expect(sut).toBeTruthy();
  });
});
