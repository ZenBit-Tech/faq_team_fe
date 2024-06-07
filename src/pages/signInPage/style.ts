import styled from '@emotion/styled';
import { Theme } from 'src/styles/Theme';
import { Link } from 'react-router-dom';
import { Section } from 'src/components/section';
import bgImg from '../../assets/images/sign-in.png';

export const Title = styled.h1<{ theme?: Theme }>`
  display: flex;
  flex-direction: row;
  margin-bottom: 8px;
  font-family: ${({ theme }) => theme.fontNames.playfairDisplay};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  font-size: ${({ theme }) => theme.fontSize.extraLg};
  line-height: 1.32;
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.colors.black};

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    color: ${({ theme }) => theme.colors.white};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    color: ${({ theme }) => theme.colors.black};
  }
`;
export const SubTitle = styled.h2<{ theme?: Theme }>`
  margin-bottom: 20px;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-size: ${({ theme }) => theme.fontSize.sm};
  line-height: 1.43;
  color: ${({ theme }) => theme.colors.gray};

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    color: ${({ theme }) => theme.colors.white};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    color: ${({ theme }) => theme.colors.black};
  }
`;
export const SignUpLink = styled(Link)<{ theme?: Theme }>`
  display: flex;
  justify-content: center;
  align-items: baseline;
  gap: 4px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.sm};
  line-height: 1.43;
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.colors.gray};

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    color: ${({ theme }) => theme.colors.white};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    color: ${({ theme }) => theme.colors.gray};
  }

  span {
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
  }
`;

export const Google = styled.button<{ theme?: Theme }>`
  margin-bottom: 20px;
  width: 335px;
  padding: 16px 16px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-family: ${({ theme }) => theme.fontNames.playfairDisplay};
  border: none;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  font-size: ${({ theme }) => theme.fontSize.md};
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  transition: background-color ${({ theme }) => theme.transition.main};

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.black};
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    width: 100%;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
  }

  &:is(:hover, :focus) {
    background-color: ${({ theme }) => theme.colors.gray};
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

export const Text = styled.p<{ theme?: Theme }>`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 20px;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-size: ${({ theme }) => theme.fontSize.extraSm};
  line-height: 1.33;
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.colors.black};

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    color: ${({ theme }) => theme.colors.white};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    color: ${({ theme }) => theme.colors.black};
  }

  ::before {
    content: '';
    display: block;
    width: 45%;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.border};

    @media screen and (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
      background-color: ${({ theme }) => theme.colors.white};
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
      background-color: ${({ theme }) => theme.colors.border};
    }
  }

  ::after {
    content: '';
    display: block;
    width: 45%;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.border};

    @media screen and (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
      background-color: ${({ theme }) => theme.colors.white};
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
      background-color: ${({ theme }) => theme.colors.border};
    }
  }
`;

export const SignInSection = styled(Section)<{ theme?: Theme }>`
  @media screen and (max-width: 767px) {
    padding-top: 60px;
    padding-bottom: 34px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    padding-top: 42px;
    padding-bottom: 42px;
    background-image: url(${bgImg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top left;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    height: 100vh;
    width: 60%;
    padding-bottom: 207px;
    background-image: url(${bgImg});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: top left;
  }
`;

export const FormWrap = styled.div<{ theme?: Theme }>`
  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 10px;
    padding-bottom: 10px;
    border-radius: 12px;
    background-color: ${({ theme }) => theme.colors.overlay_black};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    margin-top: 183px;
    display: block;
    padding-top: 0px;
    padding-bottom: 0px;
    border-radius: 0px;
    background-color: transparent;
  }
`;

export const LogoWrap = styled.div<{ theme?: Theme }>`
  margin: 50px 0 0 50px;
  @media screen and (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    display: none;
  }
`;
