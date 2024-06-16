import styled from '@emotion/styled';
import { Theme } from 'styles/theme';

export const CardInner = styled.div<{ theme?: Theme }>`
  border-radius: 8px;
  padding: 24px;
  background-color: ${({ theme }) => theme.colors.white};
`;
export const Card = styled.div<{ theme?: Theme }>`
  padding-top: 132px;
`;
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

export const ActionBtn = styled.button<{ theme?: Theme }>`
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.white};
`;
export const Info = styled.div<{ theme?: Theme }>`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  div {
    h5 {
      font-family: ${({ theme }) => theme.fontNames.playfairDisplay};
      fort-size: ${({ theme }) => theme.fontSize.sm};
      font-weight: ${({ theme }) => theme.fontWeight.medium};
    }
    p {
      font-family: ${({ theme }) => theme.fontNames.dmSans};
      fort-size: ${({ theme }) => theme.fontSize.md};
      font-weight: ${({ theme }) => theme.fontWeight.regular};
      padding: 14px;
    }
  }
`;
