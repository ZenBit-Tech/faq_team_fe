import styled from '@emotion/styled';
import { Theme } from 'styles/theme';

export const Backdrop = styled.div<{ theme?: Theme }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.overlay_black};
  z-index: 1200;
`;

export const Modal = styled.div<{ theme?: Theme }>`
  position: absolute;
  top: 50%;
  left: 50%;
  max-height: 90vh;
  min-width: 350px;
  overflow: auto;
  transform: translate(-50%, -50%);
  padding: 24px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.white};

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    min-width: 648px;
  }

  svg {
    display: block;
    margin: 0 auto;
  }

  h1 {
    margin-top: 24px;
    margin-bottom: 12px;
    font-family: ${({ theme }) => theme.fontNames.playfairDisplay};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    font-size: ${({ theme }) => theme.fontSize.semiLg};
    line-height: 1.22;
    letter-spacing: -0.01em;
    text-align: center;
    color: ${({ theme }) => theme.colors.black};

    @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
      width: 428px;
      margin-inline: auto;
      font-size: ${({ theme }) => theme.fontSize.xl};
    }
  }

  p {
    margin-bottom: 40px;
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    font-size: ${({ theme }) => theme.fontSize.md};
    line-height: 1.37;
    text-align: center;
    color: ${({ theme }) => theme.colors.light_gray};
  }

  ul {
    li:not(:last-child) {
      margin-bottom: 24px;

      @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
        margin-bottom: 0px;
      }
    }
    @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
      display: flex;
      gap: 24px;
      justify-content: center;
    }
  }
`;

export const CancelBtn = styled.button<{ theme?: Theme }>`
  display: block;
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 12px;
  padding: 18px 24px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};

  font-weight: ${({ theme }) => theme.fontWeight.medium};
  font-size: ${({ theme }) => theme.fontSize.sm};
  letter-spacing: -0.04em;
  color: ${({ theme }) => theme.colors.black};
  transition: background-color ${({ theme }) => theme.transition.main};

  &:is(:hover, :focus) {
    background-color: ${({ theme }) => theme.colors.for_tables};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    width: 200px;
  }
`;

export const DeleteBtn = styled(CancelBtn)`
  border: 1px solid transparent;
  background-color: ${({ theme }) => theme.colors.error_red};
  color: ${({ theme }) => theme.colors.white};
  transition:
    border,
    background-color,
    color ${({ theme }) => theme.transition.main};

  &:is(:hover, :focus) {
    border: 1px solid ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.colors.error_red};
    color: ${({ theme }) => theme.colors.black};
  }
`;

export const CloseBtn = styled.button<{ theme?: Theme }>`
  display: block;
  margin-left: auto;
  margin-bottom: 40px;
  width: 24px;
  height: 24px;
  background-color: ${({ theme }) => theme.colors.white};

  svg {
    width: 100%;
    height: 100%;
    stroke: ${({ theme }) => theme.colors.light_gray};
    transition: stroke ${({ theme }) => theme.transition.main};
  }

  &:is(:hover, :focus) svg {
    stroke: ${({ theme }) => theme.colors.black};
  }
`;
