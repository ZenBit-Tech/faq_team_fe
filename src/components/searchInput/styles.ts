import styled from '@emotion/styled';
import { InputProps } from 'components/searchInput/types';
import { Theme } from 'styles/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px;
  gap: 8px;
  height: 72px;
`;

export const Label = styled.label<{ theme?: Theme }>`
  font-size: ${({ theme }) => theme.fontSize.md};
  color: ${({ theme }) => theme.colors.black};
`;

export const Input = styled.input<{ theme?: Theme } & InputProps>`
  width: 100%;
  padding: 8px;
  border-radius: 8px;
  border-width: 1px;
  border: solid;
  border-color: ${({ theme }) => theme.colors.border};
  outline: none;

  &:focus {
    border-color: ${({ theme }) => theme.colors.black};
  }
`;

export const Error = styled.span<{ theme?: Theme }>`
  color: ${({ theme }) => theme.colors.error_red};
  font-size: ${({ theme }) => theme.fontSize.sm};
`;
