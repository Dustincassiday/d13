import { SignupModalComponent } from './signup-modal.component';

describe('SignupModalComponent', () => {
  let sut: SignupModalComponent;

  beforeEach(async () => {
    sut = new SignupModalComponent();
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
