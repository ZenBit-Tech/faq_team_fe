import styled from '@emotion/styled';
import { Theme } from 'styles/theme';

export const StyledSelect = styled.select<{ theme?: Theme }>`
  width: 100%;
  padding: 10px;
  font-size: ${({ theme }) => theme.fontSize.md};
  border-color: ${({ theme }) => theme.colors.gray};
  bolder-width: 1px;
  border-radius: 5px;
`;
