import styled from '@emotion/styled';
import { Theme } from 'src/styles/theme';
import { Link } from 'react-router-dom';
import { Button } from '../button';

export const StyledForm = styled.form<{ theme?: Theme }>`
  width: 335px;
  margin-bottom: 32px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    min-width: 0;
    width: 100%;
  }

  div {
    height: 66px;
    position: relative;
    margin-bottom: 20px;

    label {
      margin-bottom: 8px;
      font-family: ${({ theme }) => theme.fontNames.playfairDisplay};
      font-weight: ${({ theme }) => theme.fontWeight.semibold};
      font-size: ${({ theme }) => theme.fontSize.sm};
      line-height: 1.43;
      letter-spacing: -0.01em;
      color: ${({ theme }) => theme.colors.black};

      @media screen and (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        color: ${({ theme }) => theme.colors.white};
      }

      @media screen and (min-width: ${({ theme }) =>
          theme.breakpoint.desktop}) {
        color: ${({ theme }) => theme.colors.black};
      }
    }

    input {
      border: 1px solid ${({ theme }) => theme.colors.border};
      border-radius: 6px;
      padding: 12px 16px;
      width: 100%;
      height: 44px;
      outline: none;

      font-size: ${({ theme }) => theme.fontSize.md};
      line-height: 1.25;
      letter-spacing: -0.01em;
      color: ${({ theme }) => theme.colors.gray};
      transition: border-color ${({ theme }) => theme.transition.main};

      &:hover,
      &:focus {
        border-color: ${({ theme }) => theme.colors.black};
      }
    }

    .error-input {
      border: 1px solid ${({ theme }) => theme.colors.error_red};

      &:focus {
        border-color: ${({ theme }) => theme.colors.error_red};
        color: ${({ theme }) => theme.colors.error_red};
      }
    }

    button {
      position: absolute;
      top: 50%;
      right: 16px;
      background-color: transparent;
      padding: 0;
      width: 24px;
      height: 24px;

      svg {
        width: 100%;
        height: 100%;
      }
    }
  }
`;

export const SubmitBtn = styled(Button)`
  width: 100%;

  font-family: ${({ theme }) => theme.fontNames.playfairDisplay};
  border: none;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  font-size: ${({ theme }) => theme.fontSize.md};
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  transition: background-color ${({ theme }) => theme.transition.main};

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

export const PasswordLink = styled(Link)<{ theme?: Theme }>`
  display: block;
  margin-bottom: 20px;
  font-family: ${({ theme }) => theme.fontNames.playfairDisplay};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  font-size: ${({ theme }) => theme.fontSize.sm};
  line-height: 1.43;
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.colors.black};

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    color: ${({ theme }) => theme.colors.white};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    color: ${({ theme }) => theme.colors.black};
  }
`;

export const ErrorMsg = styled.p<{ theme?: Theme }>`
  height: 20px;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-size: ${({ theme }) => theme.fontSize.sm};
  line-height: 1.43;
  color: ${({ theme }) => theme.colors.error_red};

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    color: ${({ theme }) => theme.colors.error_tablet};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    color: ${({ theme }) => theme.colors.error_red};
  }
`;
