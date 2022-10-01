/* eslint-disable @typescript-eslint/no-explicit-any */

import { TemplateRef } from '@angular/core';
import {
  AuthenticationMockService,
  AuthenticationService,
  LoggerMockService,
} from '@d13/shared/data-access';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EMPTY, throwError } from 'rxjs';
import { ShellFacade } from './shell.facade';

describe('ShellFacade', () => {
  let sut: ShellFacade;
  let authService: AuthenticationService;
  let authDataService: AuthenticationMockService;
  let loggerService: LoggerMockService;
  let modalService: NgbModal;

  beforeEach(() => {
    loggerService = new LoggerMockService();
    authDataService = new AuthenticationMockService(loggerService);
    authService = new AuthenticationService(authDataService);
    modalService = {
      open: jest.fn(),
      dismissAll: jest.fn(),
      hasOpenModals: jest.fn().mockReturnValue(true),
    } as any;

    sut = new ShellFacade(authService, modalService);
  });

  it('should be created', () => {
    expect(sut).toBeTruthy();
  });

  describe('vm$', () => {
    it('should return a viewmodel initial values', (done) => {
      sut.vm$.subscribe((vm) => {
        expect(vm.user).toBeNull();
        expect(vm.errors).toEqual([]);
        expect(vm.authInitiated).toEqual(false);
        done();
      });
    });
  });

  describe('login', () => {
    it('should call _authService.login method', () => {
      const data = { user: 'user', pass: 'pass' };
      const spy = jest.spyOn(authService, 'login');
      sut.login(data.user, data.pass);
      expect(spy).toHaveBeenCalledWith(data.user, data.pass);
    });

    it('should call modalService.dismissAll method on success', (done) => {
      const data = { user: 'user', pass: 'pass' };
      sut.login(data.user, data.pass);
      sut.vm$.subscribe(() => {
        expect(modalService.dismissAll).toHaveBeenCalled();
        done();
      });
    });
  });

  describe('logout', () => {
    it('should call _authService.logout method', () => {
      const spy = jest.spyOn(authService, 'logout');
      sut.logout();
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('signup', () => {
    it('should call _authService.signup method', () => {
      const data = { user: 'user', pass: 'pass' };
      const spy = jest.spyOn(authService, 'signup');
      sut.signup(data.user, data.pass);
      expect(spy).toHaveBeenCalledWith(data.user, data.pass);
    });
  });

  describe('resetPassword', () => {
    it('should call _authService.resetPassword method', () => {
      const email = 'test@test.com';
      const spy = jest.spyOn(authService, 'resetPassword');
      sut.resetPassword(email);
      expect(spy).toHaveBeenCalledWith(email);
    });
  });

  describe('openModal', () => {
    it('should call _modalService.open method', () => {
      sut.openModal({} as TemplateRef<unknown>);
      expect(modalService.open).toHaveBeenCalled();
    });
  });

  describe('dismissAllModals', () => {
    it('should call _modalService.dismissAll method', () => {
      sut.dismissAllModals();
      expect(modalService.dismissAll).toHaveBeenCalled();
    });

    it('should call _modalService.hasOpenModals method', () => {
      sut.dismissAllModals();
      expect(modalService.hasOpenModals).toHaveBeenCalled();
    });
  });
});
