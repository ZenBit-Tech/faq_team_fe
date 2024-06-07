import styled from '@emotion/styled';
import { Theme } from 'src/styles/theme';

export const Container = styled.div<{ theme?: Theme }>`
  margin: 0 auto;
  padding-right: 20px;
  padding-left: 20px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    width: 768px;
    padding-right: 32px;
    padding-left: 32px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    width: 1440px;
    padding-left: 60px;
    padding-right: 60px;
  }
`;
