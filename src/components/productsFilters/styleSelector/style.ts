import styled from '@emotion/styled';

import { Theme } from 'styles/theme';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const Button = styled.button<{ selected: boolean; theme?: Theme }>`
  padding: 8px 12px;
  border: 1px solid black;
  cursor: pointer;
  background-color: ${({ selected, theme }) =>
    selected ? theme.colors.black : theme.colors.white};
  color: ${({ selected, theme }) =>
    selected ? theme.colors.white : theme.colors.black};
`;
