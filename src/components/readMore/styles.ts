import styled from '@emotion/styled';
import { Theme } from 'styles/theme.ts';

export const ReadMoreContainer = styled.p<{ theme?: Theme }>`
  font-family: ${({ theme }) => theme.fontNames.dmSans};
  font-size: ${({ theme }) => theme.fontSize.extraSm};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: #807e7e;
  line-height: 20px;

  span {
    cursor: pointer;
    text-decoration: underline;
  }
`;
