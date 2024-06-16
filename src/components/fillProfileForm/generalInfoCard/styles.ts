import styled from '@emotion/styled';

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
