import { InputHTMLAttributes } from 'react';

// export interface InputFieldInt {
//   placeholder: string;
// }

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean;
}
