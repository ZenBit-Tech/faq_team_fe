import styled from '@emotion/styled';
import { Theme } from 'styles/theme';

export const StyledFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const StyledTitle = styled.div<{ theme?: Theme }>`
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin: 0;
`;

export const StyledSubtitle = styled.div<{ theme?: Theme }>`
  font-size: ${({ theme }) => theme.fontSize.sm};
  margin: 0;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 150px;
  padding: 20px;
`;
