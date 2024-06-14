import styled from '@emotion/styled';

import { Theme } from 'styles/theme';

export const StyledImage = styled.img`
  margin-left: 20px;
  margin-right: 20px;
`;

export const PhoneWrapper = styled.div<{ theme?: Theme }>`
  @media (max-width: ${({ theme }) => theme.breakpoint.laptop}) {
    margin: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    margin: 0px;
    width: 100%;
    display: flex;
    align-items: start;
  }
`;

export const UploadPhotoWrapper = styled.div<{ theme?: Theme }>`
  @media (max-width: ${({ theme }) => theme.breakpoint.laptop}) {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    width: 100%;
    display: flex;
    align-items: start;
  }
`;
