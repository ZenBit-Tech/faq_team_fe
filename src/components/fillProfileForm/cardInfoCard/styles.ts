import styled from '@emotion/styled';
import { Theme } from 'styles/theme';

export const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export const StyledRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledSmallInput = styled.input<{ theme?: Theme }>`
  flex: 1;
  margin-right: 10px;
  padding: 10px;
  font-size: ${({ theme }) => theme.fontSize.md};
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 5px;

  &:last-child {
    margin-right: 0;
  }
`;
