import styled from '@emotion/styled';
import { Theme } from 'src/styles/theme';
import { Link } from 'react-router-dom';
import { css } from '@emotion/react';

export const SignUpSection = styled.div<{ theme?: Theme }>`
  height: 100vh;
  display: flex;
`;

export const FormContainer = styled.div<{ theme?: Theme }>`
  width: 40%;

  z-index: 100;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    min-width: 450px;
    margin: 0 auto;
    padding: 30px;
    background-color: ${({ theme }) => theme.colors.overlay_black};
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    min-width: 250px;
    width: 100%;
    margin: 0 auto;
    padding: 30px;
    background-color: ${({ theme }) => theme.colors.overlay_black};
  }
`;

export const LogoContainer = styled.div<{ img: string; theme?: Theme }>`
  ${({ img }) => css`
    background-image: url(${img});
  `}
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top left;

  width: 60%;
  height: 100%;
  @media screen and (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    width: 100%;
    position: absolute;
    z-index: 0;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    display: none;
  }
`;

export const FormHeader = styled.div<{ theme?: Theme }>`
  width: 335px;
  @media screen and (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    width: 100%;
  }
`;

export const ListContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 150px;
  margin-top: 20px;
`;

export const PolicyLink = styled(Link)<{ theme?: Theme }>`
  font-weight: ${({ theme }) => theme.fontWeight.medium};
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

export const SignUpFormWrap = styled.div<{ theme?: Theme }>`
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 12px;
  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.overlay_black};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    flex-direction: column;
    width: 335px;
    margin-top: 0px;
    padding-top: 0px;
    padding-bottom: 0px;
    border-radius: 0px;
    background-color: ${({ theme }) => theme.colors.white};
  }
`;
