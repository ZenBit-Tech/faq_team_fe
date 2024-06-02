import styled from '@emotion/styled';
import { Section } from 'src/components/section';
import { Theme } from 'src/styles/theme';

export const HomeSection = styled(Section)<{ theme?: Theme }>`
  background-color: ${({ theme }) => theme.colors.pastel_green};
`;
