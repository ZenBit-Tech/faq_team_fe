import { InputHTMLAttributes } from 'react';

export interface InputFieldInt {
  label: string;
  placeholder: string;
  validate: (value: string) => string;
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean;
}
