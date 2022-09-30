import {
  AuthenticationMockService,
  AuthenticationService,
  LoggerMockService,
} from '@d13/shared/data-access';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ShellFacade } from './shell.facade';

describe('ShellFacade', () => {
  let sut: ShellFacade;
  let authService: AuthenticationService;
  let authDataService: AuthenticationMockService;
  let loggerService: LoggerMockService;
  let modalMock: NgbModal;

  beforeEach(() => {
    loggerService = new LoggerMockService();
    authDataService = new AuthenticationMockService(loggerService);
    authService = new AuthenticationService(authDataService);
    modalMock = {} as NgbModal;

    sut = new ShellFacade(authService, modalMock);
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
});
