/* eslint-disable @typescript-eslint/no-explicit-any */

import { TemplateRef } from '@angular/core';
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
      resetPassword: jest.fn(),
      resetErrors: jest.fn(),
    } as any;
    sut = new ShellComponent(facade);
  });

  it('should create', () => {
    expect(sut).toBeTruthy();
  });

  describe('handleLoginFormSubmit', () => {
    it('should call facade.login w/ data', () => {
      const data = { email: 'test@test.com', password: 'test' };
      sut.handleLoginFormSubmit(data);
      expect(facade.login).toHaveBeenCalledWith(data.email, data.password);
    });
  });

  describe('handlePasswordResetFormSubmit', () => {
    it('should call facade.resetPassword w/ value', () => {
      const email = 'test@test.com';
      sut.handlePasswordResetFormSubmit(email);
      expect(facade.resetPassword).toHaveBeenCalledWith(email);
    });
  });

  describe('handleSignupFormSubmit', () => {
    it('should call facade.signup w/ data', () => {
      const data = { email: 'test@test.com', password: 'test' };
      sut.handleSignupFormSubmit(data);
      expect(facade.signup).toHaveBeenCalledWith(data.email, data.password);
    });
  });

  describe('handleLogout', () => {
    it('should call facade.logout', () => {
      sut.handleLogout();
      expect(facade.logout).toHaveBeenCalled();
    });
  });

  describe('handleOpenModal', () => {
    it('should call facade.dismissAllErrors', () => {
      sut.handleOpenModal({} as TemplateRef<unknown>);
      expect(facade.dismissAllModals).toHaveBeenCalled();
    });

    it('should call facade.openModal w/ value', () => {
      const value = {} as TemplateRef<unknown>;
      sut.handleOpenModal(value);
      expect(facade.openModal).toHaveBeenCalled();
    });
  });

  describe('handleCloseModal', () => {
    it('should call facade.resetErrors', () => {
      sut.handleCloseModal();
      expect(facade.resetErrors).toHaveBeenCalled();
    });
  });
});
