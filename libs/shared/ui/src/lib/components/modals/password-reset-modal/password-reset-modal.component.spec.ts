import { PasswordResetModalComponent } from './password-reset-modal.component';

describe('PasswordResetModalComponent', () => {
  let sut: PasswordResetModalComponent;

  beforeEach(async () => {
    sut = new PasswordResetModalComponent();
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
