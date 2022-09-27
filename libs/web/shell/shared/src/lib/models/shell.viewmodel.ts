import { User } from '@d13/shared/data-access';

export interface ShellViewmodel {
  user: User | null;
  authInitiated: boolean;
}
