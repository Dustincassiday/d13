import { Location } from '@d13/shared/data-access';

export interface LocationViewmodel {
  locations: Location[];
  locationSearchInitiated: boolean;
}
