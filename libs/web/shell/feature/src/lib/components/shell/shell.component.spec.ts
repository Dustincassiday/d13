/* eslint-disable @typescript-eslint/no-explicit-any */

import { ShellFacade } from '@d13/web/shell/shared';
import { of } from 'rxjs';
import { ShellComponent } from './shell.component';

describe('ShellComponent', () => {
  let sut: ShellComponent;
  let facade: ShellFacade;

  beforeEach(() => {
    facade = {
      login: jest.fn(),
      logout: jest.fn(),
      signup: jest.fn(),
      dismissModals: jest.fn(),
    } as any;
    sut = new ShellComponent(facade);
  });

  it('should create', () => {
    expect(sut).toBeTruthy();
  });

  describe('handleLoginFormSubmit', () => {
    it('should call facade.login', () => {
      sut.handleLoginFormSubmit({ user: '', pass: '' });
      expect(facade.login).toHaveBeenCalled();
    });
  });

  describe('handleSignupFormSubmit', () => {
    it('should call facade.signup', () => {
      sut.handleSignupFormSubmit({ user: '', pass: '' });
      expect(facade.signup).toHaveBeenCalled();
    });
  });
});
