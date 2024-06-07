import { Theme } from 'src/styles/theme';

export interface buttonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: string;
  theme?: Theme;
}
export enum ButtonVariant {
  Black = 'black',
  White = 'white',
}
