import { Theme } from 'styles/Theme';

export interface buttonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: string;
  theme: Theme;
}
export enum ButtonVariant {
  Black = 'black',
  White = 'white',
}
