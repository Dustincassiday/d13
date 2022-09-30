import { User } from '@d13/shared/data-access';
import { AlertModel } from './alert.model';

export interface ShellViewmodel {
  user: User | null;
  authInitiated: boolean;
  errors?: AlertModel[];
}
