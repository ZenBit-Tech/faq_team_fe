import styled from '@emotion/styled';
import { Theme } from 'styles/theme';

export const Header = styled.header<{ theme?: Theme }>`
  min-height: 70px;
  background-color: ${({ theme }) => theme.colors.white};
`;
export const AdminProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: flex-end;
  padding: 15px 0;

  button {
    cursor: pointer;
    background-color: inherit;
  }
`;

export const AdminAvatar = styled.div<{ theme?: Theme }>`
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.gray};
  padding: 8px;
  color: ${({ theme }) => theme.colors.white};
`;

export const AdminName = styled.div<{ theme?: Theme }>`
  .name {
    color: ${({ theme }) => theme.colors.black};
    font-family: ${({ theme }) => theme.fontNames.playfairDisplay};
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
    font-size: ${({ theme }) => theme.fontSize.md};
  }
  .title {
    color: ${({ theme }) => theme.colors.gray};
    font-size: ${({ theme }) => theme.fontSize.sm};
  }
`;
