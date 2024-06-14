import styled from '@emotion/styled';

import { Theme } from 'styles/theme';

export const StyledForm = styled.form<{ theme?: Theme }>`
  width: 100%;
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 5px;
  }

  input {
    margin-bottom: 15px;
    padding: 10px;
    font-size: ${({ theme }) => theme.fontSize.md};
    border-color: ${({ theme }) => theme.colors.gray};
    bolder-width: 1px;
    border-radius: 5px;
  }

  select {
    margin-bottom: 15px;
    padding: 10px;
    font-size: ${({ theme }) => theme.fontSize.md};
    border-color: ${({ theme }) => theme.colors.gray};
    bolder-width: 1px;
    border-radius: 5px;
  }
`;
