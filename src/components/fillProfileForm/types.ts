import {
  citiesOptions,
  countriesOptions,
  statesOptions,
} from 'const/constants';

export interface buttonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: string;
}
export enum ButtonVariant {
  Black = 'black',
  White = 'white',
}

export interface TabProps {
  setSelectedIndex: (index: number) => void;
  index: number;
}

export interface Sizes {
  clothSize: string;
  shoeSize: number;
  jeansSize: string;
}

export const enum UserRoles {
  Buyer = 'buyer',
  Vendor = 'vendor',
}

export interface RoleFormData {
  role: string;
}

export interface GeneralInfoSchema {
  image: FileList;
  phone: string;
}

export type Country = (typeof countriesOptions)[number];

export interface AddressSchema {
  address1: string;
  address2?: string;
  country: Country;
  state: (typeof statesOptions)[Country][number];
  city: (typeof citiesOptions)[Country][number];
}
