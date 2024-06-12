export interface buttonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: string;
}
export enum ButtonVariant {
  Black = 'black',
  White = 'white',
}
