import styled from '@emotion/styled';

import { Section } from 'components/section';
import { Theme } from 'styles/theme';

export const StyledSection = styled(Section)`
  padding: 64px 0;
`;
export const Title = styled.h3<{ theme?: Theme }>`
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  font-family: ${({ theme }) => theme.fontNames.dmSans};
  font-size: ${({ theme }) => theme.fontSize.extraLg};
  margin-bottom: 16px;
`;
export const MainTitle = styled(Title)`
  margin-bottom: 32px;
  text-align: center;
`;
export const Text = styled.p<{ theme?: Theme }>`
font-weight: ${({ theme }) => theme.fontWeight.regular};
font-family: ${({ theme }) => theme.fontNames.dmSans};
font-size: ${({ theme }) => theme.fontSize.md};
color: ${({ theme }) => theme.colors.gray}
text-align: justify
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
