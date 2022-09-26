import { LoginFormComponent } from './login-form.component';

describe('LoginFormComponent', () => {
  let sut: LoginFormComponent;

  beforeEach(() => {
    sut = new LoginFormComponent();
  });

  it('should create', () => {
    expect(sut).toBeTruthy();
  });

  describe('submit', () => {
    it('should call markAllAsTouched()', () => {
      jest.spyOn(sut.loginForm, 'markAllAsTouched');
      sut.submit();
      expect(sut.loginForm.markAllAsTouched).toHaveBeenCalled();
    });

    it('should dispatch formSubmit event if form valid', () => {
      const testFormValue = {
        email: 'email@test.com',
        password: 'pass',
      };
      jest.spyOn(sut.formSubmit, 'emit');
      sut.loginForm.setValue(testFormValue);
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
      sut.loginForm.controls['email'].setValue(testValue);
      expect(sut.email?.value).toBe(testValue);
    });

    it('should return the form password field', () => {
      const testValue = 'test';
      sut.loginForm.controls['password'].setValue(testValue);
      expect(sut.password?.value).toBe(testValue);
    });
  });
});
