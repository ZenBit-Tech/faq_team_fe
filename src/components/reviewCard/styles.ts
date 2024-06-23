import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { Theme } from 'styles/theme.ts';

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
  color: ${({ theme }) => theme.colors.review_text};
  line-height: 20px;

  margin-left: 16px;
`;
