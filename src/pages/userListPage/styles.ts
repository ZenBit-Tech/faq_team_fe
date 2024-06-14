import styled from '@emotion/styled';
import { Theme } from 'styles/theme';

export const Section = styled.section<{ theme?: Theme }>`
  background-color: ${({ theme }) => theme.colors.for_tables};
`;

export const Wrapper = styled.div<{ theme?: Theme }>`
  padding: 20px;
  border-radius: 8px;
  height: 92.4vh;
`;
export const UserListTitle = styled.div<{ theme?: Theme }>`
  font-family: ${({ theme }) => theme.fontNames.playfairDisplay};
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  padding: 20px 0;
`;
