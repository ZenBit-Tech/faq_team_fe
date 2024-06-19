import styled from '@emotion/styled';

import { buttonProps, ButtonVariant } from 'components/fillProfileForm/types';
import { Theme } from 'styles/theme';

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  max-height: 150px;
  max-width: 150px;
  border-radius: 50%;
  object-fit: cover;
`;

export const PhoneWrapper = styled.div<{ theme?: Theme }>`
  margin-bottom: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    margin: 0px;
    width: 100%;
    display: flex;
    align-items: start;
  }
`;

export const UploadPhotoWrapper = styled.div<{ theme?: Theme }>`
  @media (max-width: ${({ theme }) => theme.breakpoint.laptop}) {
    gap: 10px;
    align-items: start;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    display: flex;
    flex-direction: column;
    width: 100%;
    display: flex;
    align-items: start;
  }
`;

export const StyledUploadButton = styled.button<
  { theme?: Theme } & buttonProps
>`
  font-family: ${({ theme }) => theme.fontNames.playfairDisplay};
  font-weight: ${({ theme }) => theme.fontWeight.medium};

  min-width: 150px;
  max-height: 50px;
  padding: 8px;
  margin: 5px;
  border: solid 1px ${({ theme }) => theme.colors.black};
  background-color: ${props =>
    props.variant === ButtonVariant.White
      ? ({ theme }) => theme.colors.white
      : ({ theme }) => theme.colors.black};
  color: ${props =>
    props.variant === ButtonVariant.White
      ? ({ theme }) => theme.colors.black
      : ({ theme }) => theme.colors.white};
  border-radius: 8px;
  display: flex;
  gap: 5px;
  justify-content: center;
  align-items: center;

  input {
    display: none;
  }
`;
