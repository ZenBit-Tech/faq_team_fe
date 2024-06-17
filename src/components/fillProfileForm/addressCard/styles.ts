import styled from '@emotion/styled';

import { Theme } from 'styles/theme';

export const StyledForm = styled.div<{ theme?: Theme }>`
  width: 100%;
  min-width: 200px;
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 5px;
    font-family: ${({ theme }) => theme.fontNames.playfairDisplay};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
  }

  input {
    height: 45px;
    padding: 10px;
    font-size: ${({ theme }) => theme.fontSize.md};
    font-family: ${({ theme }) => theme.fontNames.dmSans};
    border-color: ${({ theme }) => theme.colors.gray};
    bolder-width: 1px;
    border-radius: 5px;
  }

  select {
    // margin-bottom: 15px;
    padding: 10px;
    font-size: ${({ theme }) => theme.fontSize.md};
    font-family: ${({ theme }) => theme.fontNames.dmSans};
    border-color: ${({ theme }) => theme.colors.gray};
    bolder-width: 1px;
    border-radius: 5px;
  }
`;
