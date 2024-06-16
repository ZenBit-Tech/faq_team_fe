import styled from '@emotion/styled';
import { Theme } from 'styles/theme';

export const Main = styled.main<{ theme?: Theme }>`
  section {
    padding-left: 240px;
    min-height: 92.4vh;
    background-color: ${({ theme }) => theme.colors.for_tables};
  }
`;
export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
`;
