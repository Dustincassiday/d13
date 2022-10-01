import { LoginModalComponent } from './login-modal.component';

describe('LoginModalComponent', () => {
  let sut: LoginModalComponent;

  beforeEach(async () => {
    sut = new LoginModalComponent();
  });

  it('should create', () => {
    expect(sut).toBeTruthy();
  });
});
