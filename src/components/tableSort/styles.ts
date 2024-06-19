import styled from '@emotion/styled';
import { Theme } from 'styles/theme';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

export const Title = styled.h2<{ theme?: Theme }>`
  margin: 0;
  color: ${({ theme }) => theme.colors.black};
  font-size: 24px;
  position: relative;
  ::before {
    position: absolute;
    width: 8px;
    height: 24px;
    content: '';
    left: -12px;
    top: 0;
    background-color: ${({ theme }) => theme.colors.black};
    border-radius: 8px;
  }
`;

export const SortButton = styled.button<{ theme?: Theme }>`
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.colors.for_tables};
  border-radius: 5px;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSize.md};
  display: flex;
  align-items: center;

  span {
    margin-left: 10px;
  }
`;
