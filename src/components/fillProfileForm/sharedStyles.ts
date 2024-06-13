import styled from '@emotion/styled';
import { buttonProps, ButtonVariant } from 'components/fillProfileForm/types';
import { Theme } from 'styles/theme';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px;
`;

export const StyledFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 30%;
`;

export const StyledSubtitle = styled.div<{ theme?: Theme }>`
  font-size: ${({ theme }) => theme.fontSize.sm};
  margin: 0;
`;

export const StyledTitle = styled.div<{ theme?: Theme }>`
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin: 0;
`;

export const StyledCard = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px;
`;

export const StyledInput = styled.input<{ theme?: Theme }>`
  margin-bottom: 15px;
  padding: 10px;
  font-size: ${({ theme }) => theme.fontSize.md};
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 5px;
`;

export const StyledButton = styled.button<{ theme?: Theme } & buttonProps>`
  min-width: 100px;
  padding: 8px;
  margin: 5px;
  border: solid 1px ${({ theme }) => theme.colors.black};
  background-color: ${props =>
    props.variant === ButtonVariant.White
      ? ({ theme }) => theme.colors.white
      : ({ theme }) => theme.colors.black};
  color: ${props =>
    props.variant === ButtonVariant.White
      ? ({ theme }) => theme.colors.black
      : ({ theme }) => theme.colors.white};
  border-radius: 8px;
  display: flex;
  gap: 5px;
  justify-content: center;
  align-items: center;
`;
