import styled from '@emotion/styled';
import { Theme } from 'styles/theme.ts';
import { css } from '@emotion/react';

export const SideBarWrapper = styled.div`
  width: 31%;
`;

export const SideBarInfo = styled.div``;

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

  max-height: 21px;

  span {
    align-self: flex-end;
    font-family: ${({ theme }) => theme.fontNames.playfairDisplay};
  }
`;

export const FollowButtonWrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 32px;
  padding: 14px 0;

  border: 1px solid #edeae9;
  border-radius: 12px;
`;

export const FollowButton = styled.button<{ theme?: Theme }>`
  width: 61%;

  font-family: ${({ theme }) => theme.fontNames.playfairDisplay};
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  line-height: 21.33px;

  padding: 16px 0;

  background-color: ${({ theme }) => theme.colors.black};
  border-radius: 12px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.black_hover};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.black_hover};
    cursor: default;
  }
`;
