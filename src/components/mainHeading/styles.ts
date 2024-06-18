import styled from '@emotion/styled';

import { Theme } from 'styles/theme';

export const HeadingInner = styled.div<{ theme?: Theme }>`
  background-color: ${({ theme }) => theme.colors.greyish_red};
  min-height: 120px;
`;
export const StyledH1 = styled.h1<{ theme?: Theme }>`
  font-family: ${({ theme }) => theme.fontNames.playfairDisplay};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  font-size: ${({ theme }) => theme.fontSize.xxl};
  padding: 30px 0;
  text-align: center;
}
`;
