import styled from '@emotion/styled';

import { buttonProps, ButtonVariant } from 'components/fillProfileForm/types';
import { Theme } from 'styles/theme';

export const StyledTabContainer = styled.form<{ theme?: Theme }>`
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
  justify-content: start;
  gap: 5px;
  width: 30%;
  min-height: 80px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    width: 100%;
    min-height: 0px;
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
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 20px 20px 0px 20px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const StyledInput = styled.input<{ theme?: Theme }>`
  margin-bottom: 5px;
  font-size: ${({ theme }) => theme.fontSize.md};
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoint.laptop}) {
    margin-bottom: 0px;
  }
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

export const StyledFormBlock = styled.div<{ theme?: Theme }>`
  display: flex;
  flex-direction: column;

  @media (max-width: ${({ theme }) => theme.breakpoint.laptop}) {
    width: 100%;
    padding-left: 20px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    width: 100%;
    padding-left: 0px;
  }

  p {
    color: ${({ theme }) => theme.colors.error_red};
    min-height: 20px;

    @media (max-width: ${({ theme }) => theme.breakpoint.laptop}) {
      margin-top: 10px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
      margin-top: 10px;
    }
  }
`;
