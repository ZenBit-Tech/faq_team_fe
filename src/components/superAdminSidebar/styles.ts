import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { Theme } from 'styles/theme';

export const SideBar = styled.aside<{ theme?: Theme }>`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 240px;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 15px;
  border-right: 2px solid ${({ theme }) => theme.colors.for_tables};
`;
export const NavBar = styled.nav`
  margin-top: 28px;
`;
export const Menu = styled.ul`
  display: flex;
  gap: 16px;
  flex-direction: column;
`;
export const MenuItem = styled.li<{ theme?: Theme }>`
  padding: 12px;
  flex-grow: 1;
  display: flex;
  gap: 12px;
  align-items: center;
  :hover {
    background-color: ${({ theme }) => theme.colors.pastel_green};
  }
  :active {
    background-color: ${({ theme }) => theme.colors.pastel_green};
  }
`;
export const MenuLink = styled(Link)<{ theme?: Theme }>`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  display: inline-block;
  width: 100%;
`;
