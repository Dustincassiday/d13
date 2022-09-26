import { PasswordResetFormComponent } from './password-reset-form.component';

describe('PasswordResetFormComponent', () => {
  let sut: PasswordResetFormComponent;

  beforeEach(() => {
    sut = new PasswordResetFormComponent();
  });

  it('should create', () => {
    expect(sut).toBeTruthy();
  });

  describe('submit', () => {
    it('should call markAllAsTouched()', () => {
      jest.spyOn(sut.passwordResetForm, 'markAllAsTouched');
      sut.submit();
      expect(sut.passwordResetForm.markAllAsTouched).toHaveBeenCalled();
    });

    it('should dispatch formSubmit event if form valid', () => {
      const testFormValue = {
        email: 'email@test.com',
      };
      jest.spyOn(sut.formSubmit, 'emit');
      sut.passwordResetForm.setValue(testFormValue);
      sut.submit();
      expect(sut.formSubmit.emit).toHaveBeenCalled();
    });

    it('should not dispatch formSubmit event if form invalid', () => {
      jest.spyOn(sut.formSubmit, 'emit');
      sut.submit();
      expect(sut.formSubmit.emit).not.toHaveBeenCalled();
    });
  });

  describe('form getters', () => {
    it('should return the form email field', () => {
      const testValue = 'test';
      sut.passwordResetForm.controls['email'].setValue(testValue);
      expect(sut.email?.value).toBe(testValue);
    });
  });
});
