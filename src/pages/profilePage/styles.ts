import styled from '@emotion/styled';
import { Section } from 'components/section';
import { maxTabletWidth } from 'const/breakpoints';
import { Theme } from 'styles/theme';

export const ProfileSection = styled(Section)`
  padding-top: 40px;
  padding-bottom: 180px;

  @media screen and (max-width: ${maxTabletWidth}px) {
    padding-top: 52px;
    padding-bottom: 83px;
  }
`;

export const ProfileSectionWrap = styled.div<{ theme?: Theme }>`
  display: flex;
  gap: 32px;

  @media screen and (max-width: ${maxTabletWidth}px) {
    display: block;
  }
`;

export const OutletWrap = styled.div`
  flex-grow: 1;
`;

export const ProfileNavBarWrap = styled.div`
  @media screen and (max-width: ${maxTabletWidth}px) {
    margin-bottom: 32px;
  }
`;

export const TitleSection = styled(Section)<{ theme?: Theme }>`
  @media screen and (max-width: ${maxTabletWidth}px) {
    display: none;
  }
  padding-top: 32px;
  padding-bottom: 52px;
  background-color: ${({ theme }) => theme.colors.greyish_red};

  p {
    font-family: ${({ theme }) => theme.fontNames.playfairDisplay};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    font-size: ${({ theme }) => theme.fontSize.xxl};
    line-height: 1.45;
    letter-spacing: -0.03em;
    text-align: center;
    color: ${({ theme }) => theme.colors.black};
  }
`;
