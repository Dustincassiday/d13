export interface User {
  id: string;
  name: string | null;
  email: string | null;
  phone: string | null;
  photoUrl: string | null;
  verified: boolean;
  anonymous: boolean;
  metadata: { [key: string]: string | number | boolean }[];
}
