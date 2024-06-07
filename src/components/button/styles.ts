import styled from '@emotion/styled';
import { ButtonVariant, buttonProps } from './types';
import { Theme } from 'src/styles/theme';

export const StyledButton = styled.button<{ theme: Theme } & buttonProps>`
  background-color: ${props =>
    props.variant === ButtonVariant.Black
      ? props.theme.colors.black
      : props.theme.colors.white};
  color: ${props =>
    props.variant === ButtonVariant.Black
      ? props.theme.colors.white
      : props.theme.colors.black};
  border: 2px solid
    ${props =>
      props.variant === ButtonVariant.Black
        ? props.theme.colors.black
        : props.theme.colors.white};
  padding: 16px;
  font-size: ${({ theme }) => theme.fontSize.md};
  cursor: pointer;
  border-radius: 12px;
`;
