import styled from '@emotion/styled';
import { Theme } from 'styles/theme.ts';
import { css } from '@emotion/react';

export const PublicProfileInfoWrapper = styled.div`
  width: 65%;
`;

export const VendorTabsWrapper = styled.div`
  width: 34.5%;

  display: flex;

  background-color: #edeae9;
  border-radius: 8px;
`;
export const ProductsTab = styled.div`
  width: 50%;
  padding: 10px 0;
  border-radius: 8px;
  text-align: center;
  color: #2e2e46;

  cursor: pointer;
`;
export const ReviewsTab = styled.div`
  width: 50%;
  padding: 10px 0;
  background-color: #333333;
  border-radius: 8px;
  text-align: center;
  color: #ffffff;
`;
export const ReviewsWrapper = styled.div<{ theme?: Theme }>`
  width: 100%;

  h2 {
    margin: 24px 0;

    font-family: ${({ theme }) => theme.fontNames.playfairDisplay};
    font-size: ${({ theme }) => theme.fontSize.midLq};
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
    line-height: 37px;
  }

  ul {
    li {
      border: 1px solid rgba(0, 0, 0, 0.24);
      border-radius: 12px;
      padding: 16px;
      margin-bottom: 24px;
    }
  }
`;
export const ReviewerAvatar = styled.div<{ img: string; theme?: Theme }>`
  ${({ img }) => css`
    background-image: url(${img});
  `}

  width: 72px;
  height: 72px;
  border-radius: 50%;
  background-size: cover;
`;
export const ReviewerInfo = styled.div<{ theme?: Theme }>`
  display: flex;
  justify-content: space-between;

  margin-bottom: 12px;

  div {
    display: flex;

    div {
      display: flex;
      flex-direction: column;
    }
  }
`;
export const ReviewerName = styled.p<{ theme?: Theme }>`
  font-family: ${({ theme }) => theme.fontNames.playfairDisplaySC};
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: 22px;

  margin-left: 16px;
`;
export const ReviewDate = styled.p<{ theme?: Theme }>`
  font-family: ${({ theme }) => theme.fontNames.dmSans};
  font-size: ${({ theme }) => theme.fontSize.extraSm};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: #807e7e;
  line-height: 20px;

  margin-left: 16px;
`;
export const ReviewText = styled.div``;
