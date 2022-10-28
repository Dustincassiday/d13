import { User as FirebaseUser } from '@angular/fire/auth';
import { User } from '../models';

export function mapFirebaseUserToUser(firebaseUser: FirebaseUser): User {
  return {
    id: firebaseUser.uid,
    name: firebaseUser.displayName,
    email: firebaseUser.email,
    phone: firebaseUser.phoneNumber,
    photoUrl: firebaseUser.photoURL,
    verified: firebaseUser.emailVerified,
    anonymous: firebaseUser.isAnonymous,
    metadata: [],
  };
}
