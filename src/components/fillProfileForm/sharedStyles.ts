import styled from '@emotion/styled';

import { buttonProps, ButtonVariant } from 'components/fillProfileForm/types';
import { Theme } from 'styles/theme';

export const StyledTabContainer = styled.div<{ theme?: Theme }>`
  display: flex;
  flex-direction: column;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    justify-content: space-between;
    height: 85vh;
  }
`;

export const StyledForm = styled.div<{ theme?: Theme }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const StyledFormContainer = styled.div<{ theme?: Theme }>`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 30%;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    width: 100%;
  }
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

export const StyledCard = styled.div<{ theme?: Theme }>`
  display: flex;
  flex-direction: row;
  padding: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const StyledInput = styled.input<{ theme?: Theme }>`
  margin-bottom: 15px;
  padding: 10px;
  font-size: ${({ theme }) => theme.fontSize.md};
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 5px;
`;

export const StyledButton = styled.button<{ theme?: Theme } & buttonProps>`
  min-width: 150px;
  max-height: 50px;
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

  input {
    display: none;
  }
`;

export const ButtonsContainer = styled.div<{ theme?: Theme }>`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: end;
  padding: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    justify-content: space-around;
    padding: 0px;
  }
`;
