/* eslint-disable @typescript-eslint/no-explicit-any */

import { of } from 'rxjs';
import { AuthenticationFirebaseService } from './authentication.firebase.service';
import {
  Auth,
  authState,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
} from '@angular/fire/auth';

jest.mock('@angular/fire/auth', () => ({
  authState: jest.fn(),
  signOut: jest.fn(),
  createUserWithEmailAndPassword: jest.fn(),
  sendPasswordResetEmail: jest.fn(),
  signInWithEmailAndPassword: jest.fn(),
}));

describe('AuthenticationFirebaseService', () => {
  // SUT must be instantiated AFTER module mocks
  let sut: AuthenticationFirebaseService;
  let authMock: Auth;

  beforeEach(() => {
    authMock = {} as any;
  });

  it('should be created', () => {
    // arrange
    jest.mocked(authState).mockReturnValue(of(null));

    // act
    sut = new AuthenticationFirebaseService(authMock);

    // assert
    expect(sut).toBeTruthy();
  });

  describe('currentUser$', () => {
    it('should be null if not logged in', (done) => {
      // arrange
      jest.mocked(authState).mockReturnValue(of(null));
      sut = new AuthenticationFirebaseService(authMock);

      // act
      sut.currentUser$.subscribe((user) => {
        // assert
        expect(user).toBe(null);
        done();
      });
    });

    it('should return User if logged in', (done) => {
      // arrange
      jest.mocked(authState).mockReturnValue(of({ uid: '12345' } as any));
      sut = new AuthenticationFirebaseService(authMock);

      // act
      sut.currentUser$.subscribe((user) => {
        // assert
        expect(user?.id).toBe('12345');
        done();
      });
    });
  });

  describe('login', () => {
    it('should call signInWithUsername and password with supplied credentials', () => {
      // arrange
      jest.mocked(authState).mockReturnValue(of(null));
      jest.mocked(signInWithEmailAndPassword).mockResolvedValue({} as any);
      sut = new AuthenticationFirebaseService(authMock);

      // act
      sut.login('user', 'pass');

      // assert
      expect(signInWithEmailAndPassword).toHaveBeenCalledWith(
        authMock,
        'user',
        'pass'
      );
    });

    it('should catch firebase error', (done) => {
      // arrange
      jest.mocked(authState).mockReturnValue(of(null));
      jest
        .mocked(signInWithEmailAndPassword)
        .mockRejectedValue(new Error('Firebase Error'));

      sut = new AuthenticationFirebaseService(authMock);

      // act
      sut.login('error@error', 'pass').subscribe({
        error: (err) => {
          // assert
          expect(err.message).toBe('Firebase Error');
          done();
        },
      });
    });
  });

  describe('logout', () => {
    it('should  call signout', () => {
      // arrange
      jest.mocked(authState).mockReturnValue(of(null));
      jest.mocked(signOut).mockResolvedValue(void 0);
      sut = new AuthenticationFirebaseService(authMock);

      // act
      sut.logout();

      //assert
      expect(signOut).toHaveBeenCalled();
    });

    it('should catch firebase error', (done) => {
      // arrange
      jest.mocked(authState).mockReturnValue(of(null));
      jest.mocked(signOut).mockRejectedValue(new Error('Firebase Error'));

      sut = new AuthenticationFirebaseService(authMock);

      // act
      sut.logout().subscribe({
        error: (err) => {
          // assert
          expect(err.message).toBe('Firebase Error');
          done();
        },
      });
    });
  });

  describe('signup', () => {
    it('should call createUserWithEmailAndPassword and password with supplied credentials', () => {
      // arrange
      jest.mocked(authState).mockReturnValue(of(null));
      jest.mocked(createUserWithEmailAndPassword).mockResolvedValue({} as any);
      sut = new AuthenticationFirebaseService(authMock);

      // act
      sut.signup('user', 'pass');

      // assert
      expect(createUserWithEmailAndPassword).toHaveBeenCalledWith(
        authMock,
        'user',
        'pass'
      );
    });

    it('should catch firebase error', (done) => {
      // arrange
      jest.mocked(authState).mockReturnValue(of(null));
      jest
        .mocked(createUserWithEmailAndPassword)
        .mockRejectedValue(new Error('Firebase Error'));

      sut = new AuthenticationFirebaseService(authMock);

      // act
      sut.signup('error@error', 'pass').subscribe({
        error: (err) => {
          // assert
          expect(err.message).toBe('Firebase Error');
          done();
        },
      });
    });
  });

  describe('resetPassword', () => {
    it('should call sendPasswordResetEmail with supplied credentials', () => {
      // arrange
      jest.mocked(authState).mockReturnValue(of(null));
      jest.mocked(sendPasswordResetEmail).mockResolvedValue(void 0);
      sut = new AuthenticationFirebaseService(authMock);

      // act
      sut.resetPassword('test@test');

      //assert
      expect(sendPasswordResetEmail).toHaveBeenCalledWith(
        authMock,
        'test@test'
      );
    });

    it('should catch firebase error', (done) => {
      // arrange
      jest.mocked(authState).mockReturnValue(of(null));
      jest
        .mocked(sendPasswordResetEmail)
        .mockRejectedValue(new Error('Firebase Error'));

      sut = new AuthenticationFirebaseService(authMock);

      // act
      sut.resetPassword('error@error').subscribe({
        error: (err) => {
          // assert
          expect(err.message).toBe('Firebase Error');
          done();
        },
      });
    });
  });
});
