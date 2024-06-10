import { Theme } from 'styles/theme.ts';
import styled from '@emotion/styled';
import { Button } from 'components/button';

export const OtpFrom = styled.form<{ theme?: Theme }>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  min-width: 335px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    min-width: 0;
    width: 100%;
  }

  label {
    margin-bottom: 8px;
    font-family: ${({ theme }) => theme.fontNames.playfairDisplay};
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
    font-size: ${({ theme }) => theme.fontSize.sm};
    line-height: 1.43;
    letter-spacing: -0.01em;
    color: ${({ theme }) => theme.colors.black};

    @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
      color: ${({ theme }) => theme.colors.white};
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
      color: ${({ theme }) => theme.colors.black};
    }
  }
  input {
    width: 45px;
    height: 45px;
    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    font-family: ${({ theme }) => theme.fontNames.playfairDisplay};
    font-size: ${({ theme }) => theme.fontSize.extraLg};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    text-align: center;
    color: ${({ theme }) => theme.colors.gray};
    box-shadow: 0px 2px 4px ${({ theme }) => theme.colors.border};

    &:hover,
    &:focus,
    &:active {
      border-color: ${({ theme }) => theme.colors.black};
    }
  }
`;

export const InputContainer = styled.div<{ theme?: Theme }>`
  display: flex;
  gap: 13px;
`;
export const VerifyBtn = styled(Button)<{ theme?: Theme }>`
  width: 100%;
  padding: 16px 141px;

  font-family: ${({ theme }) => theme.fontNames.playfairDisplay};
  border: none;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  font-size: ${({ theme }) => theme.fontSize.md};
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  transition: background-color ${({ theme }) => theme.transition.main};

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
  }

  &:is(:hover, :focus) {
    background-color: ${({ theme }) => theme.colors.gray};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.greyish_red};
    color: ${({ theme }) => theme.colors.gray};
    cursor: not-allowed;
  }
`;

export const VerifyInfoContainer = styled.div<{ theme?: Theme }>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  margin-top: 10px;
  margin-bottom: 15px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    color: ${({ theme }) => theme.colors.white};
    div {
      color: inherit;
    }
  }
`;

export const ResendButton = styled.div<{ theme?: Theme }>`
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  cursor: pointer;
`;
