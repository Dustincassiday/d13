export interface Location {
  id: string;
  name: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  postalCode: string;
  displayAddress: string;
  metadata: { [key: string]: string | number | boolean }[];
}
