import { AuthenticationMockService, LoggerMockService } from '../../data/mocks';
import { AuthenticationService } from './authentication.service';

describe('AuthenticationService', () => {
  let sut: AuthenticationService;
  let mockAuthService: AuthenticationMockService;
  let mockLoggerService: LoggerMockService;

  beforeEach(() => {
    mockLoggerService = new LoggerMockService();
    mockAuthService = new AuthenticationMockService(mockLoggerService);
    sut = new AuthenticationService(mockAuthService);
  });

  it('should be created', () => {
    expect(sut).toBeTruthy();
  });

  describe('currentUser$', () => {
    it('should be null if not logged in', (done) => {
      sut.currentUser$.subscribe((user) => {
        expect(user).toBe(null);
        done();
      });
    });

    it('should return User if logged in', (done) => {
      sut.login('user', 'pass');
      sut.currentUser$.subscribe((user) => {
        expect(user?.id).toBe('12345');
        done();
      });
    });
  });

  describe('login', () => {
    it('should call _authservice.login method', () => {
      const data = { user: 'user', pass: 'pass' };
      jest.spyOn(mockAuthService, 'login');
      sut.login(data.user, data.pass);
      expect(mockAuthService.login).toHaveBeenCalledWith(data.user, data.pass);
    });

    it('should set currentUser$ on success', (done) => {
      sut.login('user', 'pass').subscribe();

      sut.currentUser$.subscribe((user) => {
        expect(user?.id).toBe('12345');
        done();
      });
    });
  });

  describe('logout', () => {
    it('should call _authservice.logout method', () => {
      jest.spyOn(mockAuthService, 'logout');
      sut.logout();
      expect(mockAuthService.logout).toHaveBeenCalled();
    });
  });

  describe('resetPassword', () => {
    it('should call _authservice.resetPassword method', () => {
      const email = 'test@test.com';
      jest.spyOn(mockAuthService, 'resetPassword');
      sut.resetPassword(email);
      expect(mockAuthService.resetPassword).toHaveBeenCalledWith(email);
    });
  });

  describe('signup', () => {
    it('should call _authservice.signup method', () => {
      const data = { email: 'test@test.com', pass: 'pass' };
      jest.spyOn(mockAuthService, 'signup');
      sut.signup(data.email, data.pass);
      expect(mockAuthService.signup).toHaveBeenCalledWith(
        data.email,
        data.pass
      );
    });

    it('should set currenUser$ on success', (done) => {
      sut.signup('test@test.com', 'pass').subscribe();

      sut.currentUser$.subscribe((user) => {
        expect(user?.id).toBe('12345');
        done();
      });
    });
  });
});
