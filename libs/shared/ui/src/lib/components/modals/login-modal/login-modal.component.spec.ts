import { LoginModalComponent } from './login-modal.component';

describe('LoginModalComponent', () => {
  let sut: LoginModalComponent;

  beforeEach(async () => {
    sut = new LoginModalComponent();
  });

  it('should create', () => {
    expect(sut).toBeTruthy();
  });

  describe('ngOnDestroy', () => {
    it('should emit closeModal event when called', () => {
      const spy = jest.spyOn(sut.closeModal, 'emit');
      sut.ngOnDestroy();
      expect(spy).toHaveBeenCalled();
    });
  });
});
