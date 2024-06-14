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
