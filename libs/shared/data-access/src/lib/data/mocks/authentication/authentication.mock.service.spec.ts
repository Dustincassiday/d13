/* eslint-disable @typescript-eslint/no-explicit-any */

import { LoggerMockService } from '../logger/logger.mock.service';
import { AuthenticationMockService } from './authentication.mock.service';

describe('AuthenticationService', () => {
  let sut: AuthenticationMockService;
  let loggerService: LoggerMockService;

  beforeEach(() => {
    loggerService = new LoggerMockService();
    sut = new AuthenticationMockService(loggerService);
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
    it('should ser currentUser$ on success', (done) => {
      sut.login('user', 'pass');
      sut.currentUser$.subscribe((user) => {
        expect(user?.id).toBe('12345');
        done();
      });
    });

    it('should throw an error on invalid login', (done) => {
      sut.login('error@error', 'pass').subscribe({
        error: (err) => {
          expect(err.message).toBe('Invalid login');
          done();
        },
      });
    });

    it('should throw an error on locked login', (done) => {
      sut.login('locked@error', 'pass').subscribe({
        error: (err) => {
          expect(err.message).toBe('This account has been locked');
          done();
        },
      });
    });
  });

  describe('logout', () => {
    it('should have null currentUser$', (done) => {
      sut.login('user', 'pass');
      sut.currentUser$.subscribe((user) => {
        expect(user).toBeNull;
        done();
      });
    });
  });
});
