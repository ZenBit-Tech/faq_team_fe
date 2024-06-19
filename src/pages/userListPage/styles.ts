import styled from '@emotion/styled';
import { Theme } from 'styles/theme';

export const UserListTitle = styled.div<{ theme?: Theme }>`
  font-family: ${({ theme }) => theme.fontNames.playfairDisplay};
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  padding: 20px 0;
`;
