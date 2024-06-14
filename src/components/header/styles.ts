import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { Theme } from 'styles/theme';

export const StyledHeader = styled.header<{ theme?: Theme }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const InnerContainer = styled.div<{ theme?: Theme }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    flex-direction: column;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
`;

export const Nav = styled.nav`
  display: flex;
`;

export const NavLink = styled(Link)<{ theme?: Theme }>`
  text-decoration: none;
  font-family: ${({ theme }) => theme.fontNames.playfairDisplay};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.sm};
  &:hover {
    text-decoration: underline;
  }
`;
export const MenuNav = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
`;
export const MenuNavItem = styled.li``;

export const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Icon = styled.div`
  width: 24px;
  height: 24px;
`;
export const IconBag = styled(Icon)`
  position: relative;
`;
export const Circle = styled.div<{ theme?: Theme }>`
  width: 10px;
  height: 10px;
  background-color: ${({ theme }) => theme.colors.black};
  border-radius: 50%;
  position: absolute;
  top: 0;
  right: 0;
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
`;
