/* eslint-disable @typescript-eslint/no-explicit-any */

import { ShellFacade } from '@d13/web/shell/shared';
import { ShellComponent } from './shell.component';

describe('ShellComponent', () => {
  let sut: ShellComponent;
  let facade: ShellFacade;

  beforeEach(() => {
    facade = {
      login: jest.fn(),
      logout: jest.fn(),
      signup: jest.fn(),
      openModal: jest.fn(),
      dismissAllModals: jest.fn(),
      resetErrors: jest.fn(),
    } as any;
    sut = new ShellComponent(facade);
  });

  it('should create', () => {
    expect(sut).toBeTruthy();
  });

  describe('handleBtnClick', () => {
    it('should call facade.logout with id "logout"', () => {
      sut.handleBtnClick('logout');
      expect(facade.logout).toHaveBeenCalled();
    });

    it('should call facade.dismissAllModals', () => {
      sut.handleBtnClick('any id');
      expect(facade.dismissAllModals).toHaveBeenCalled();
    });

    it('should call facade.opneModal with signupRef with id "signup"', () => {
      sut.signupRef = {} as any;
      sut.handleBtnClick('signup');
      expect(facade.openModal).toHaveBeenCalledWith(sut.signupRef);
    });

    it('should call facade.opneModal loginRef with id "login"', () => {
      sut.loginRef = {} as any;
      sut.handleBtnClick('login');
      expect(facade.openModal).toHaveBeenCalledWith(sut.loginRef);
    });
  });

  describe('handleLoginFormSubmit', () => {
    it('should call facade.login', () => {
      sut.handleLoginFormSubmit({ user: '', pass: '' });
      expect(facade.login).toHaveBeenCalled();
    });
  });

  describe('handleLoginFormSubmit', () => {
    it('should call facade.login', () => {
      sut.handleLoginFormSubmit({ user: '', pass: '' });
      expect(facade.login).toHaveBeenCalled();
    });
  });

  describe('handleCloseModal', () => {
    it('should call facade.resetErrors', () => {
      sut.handleCloseModal();
      expect(facade.resetErrors).toHaveBeenCalled();
    });
  });
});
