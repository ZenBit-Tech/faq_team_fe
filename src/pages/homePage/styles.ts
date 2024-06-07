import styled from '@emotion/styled';
import { Section } from 'components/section';
import { Theme } from 'styles/Theme';

export const HomeSection = styled(Section)<{ theme?: Theme }>`
  background-color: ${({ theme }) => theme.colors.pastel_green};
`;
