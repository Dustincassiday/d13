import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let sut: HeaderComponent;

  beforeEach(async () => {
    sut = new HeaderComponent();
  });

  it('should create', () => {
    expect(sut).toBeTruthy();
  });
});
