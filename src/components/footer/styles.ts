import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

import { Theme } from 'styles/theme';

export const StyledFooter = styled.footer<{ theme?: Theme }>`
  background-color: ${({ theme }) => theme.colors.greyish_red};
`;

export const FooterInner = styled.div<{ theme?: Theme }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 72px 0;
  gap: 40px;
  @media screen and (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    flex-direction: column;
  }
`;
export const FooterLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
`;
export const FooterRight = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 80px;
`;
export const FooterLogo = styled.div``;
export const FooterSocials = styled.div`
  display: flex;
  gap: 16px;
`;
export const FooterIcon = styled.div<{ theme?: Theme }>`
  background-color: ${({ theme }) => theme.colors.black};
  border-radius: 50%;
  padding: 9px;
`;
export const FooterText = styled.p`
  width: 190px;
`;
export const FooterMenu = styled.div`
  gap: 16px;
  display: flex;
  flex-direction: column;
`;
export const FooterMenuList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export const FooterTitle = styled.h3<{ theme?: Theme }>`
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-family: ${({ theme }) => theme.fontNames.playfairDisplay};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;
export const FooterMenuItem = styled.li<{ theme?: Theme }>`
  font-size: ${({ theme }) => theme.fontSize.sm};
`;
export const FooterLink = styled(Link)``;

export const Credentials = styled.div<{ theme?: Theme }>`
  border-top: 1px solid ${({ theme }) => theme.colors.gray};
  padding: 24px 0;
`;
