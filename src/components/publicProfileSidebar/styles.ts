import styled from '@emotion/styled';
import { Theme } from 'styles/theme.ts';
import { css } from '@emotion/react';

export const SideBarWrapper = styled.div`
  display: flex;
  gap: 32px;

  padding: 0 54px;
`;

export const SideBarInfo = styled.div`
  width: 31%;
`;
export const ProfileInfoContainer = styled.div`
  width: 74%;
`;

export const UserInfo = styled.div<{ theme?: Theme }>`
  display: flex;
  align-items: center;
  flex-direction: column;

  padding-top: 32px;
`;

export const ProfileAvatar = styled.div<{ img: string; theme?: Theme }>`
  ${({ img }) => css`
    background-image: url(${img});
  `}

  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-size: cover;
`;

export const UserName = styled.p<{ theme?: Theme }>`
  font-family: ${({ theme }) => theme.fontNames.playfairDisplay};
  font-size: ${({ theme }) => theme.fontSize.midLq};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  line-height: 37px;

  margin: 12px 0;
`;

export const UserRating = styled.p<{ theme?: Theme }>`
  display: flex;
  gap: 5px;

  span {
    align-self: flex-end;
  }
`;

export const FollowButtonWrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 32px;
  padding: 14px 56px;

  border: 1px solid #edeae9;
  border-radius: 12px;
`;

export const FollowButton = styled.div<{ theme?: Theme }>`
  width: 100%;

  font-family: ${({ theme }) => theme.fontNames.playfairDisplay};
  text-align: center;
  color: #ffffff;
  font-weight: 500;
  line-height: 21.33px;

  padding: 16px 0;

  background-color: #333333;
  border-radius: 12px;
`;
