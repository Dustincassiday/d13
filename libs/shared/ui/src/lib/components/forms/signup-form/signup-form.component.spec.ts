/* eslint-disable @typescript-eslint/no-explicit-any */

import { SignupFormComponent } from './signup-form.component';

describe('SignupFormComponent', () => {
  let sut: SignupFormComponent;

  beforeEach(() => {
    sut = new SignupFormComponent();
  });

  it('should fail', () => {
    expect(false).toBeTruthy();
  });

  it('should create', () => {
    expect(sut).toBeTruthy();
  });

  describe('submit', () => {
    it('should call markAllAsTouched()', () => {
      jest.spyOn(sut.form, 'markAllAsTouched');
      sut.submit();
      expect(sut.form.markAllAsTouched).toHaveBeenCalled();
    });

    it('should dispatch formSubmit event if form valid', () => {
      const testFormValue = {
        name: 'test',
        email: 'email@test.com',
        password: 'pass',
        confirm: 'pass',
      };
      jest.spyOn(sut.formSubmit, 'emit');
      sut.form.setValue(testFormValue);
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
    it('should return the form name field', () => {
      const testValue = 'test';
      sut.form.controls['name'].setValue(testValue);
      expect(sut.name?.value).toBe(testValue);
    });

    it('should return the form email field', () => {
      const testValue = 'test';
      sut.form.controls['email'].setValue(testValue);
      expect(sut.email?.value).toBe(testValue);
    });

    it('should return the form password field', () => {
      const testValue = 'test';
      sut.form.controls['password'].setValue(testValue);
      expect(sut.password?.value).toBe(testValue);
    });

    it('should return the form confirm field', () => {
      const testValue = 'test';
      sut.form.controls['confirm'].setValue(testValue);
      expect(sut.confirm?.value).toBe(testValue);
    });
  });
});
