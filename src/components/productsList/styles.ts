import styled from '@emotion/styled';

import { Theme } from 'styles/theme.ts';

export const ProductsWrapper = styled.div<{ theme?: Theme }>`
  width: 100%;
  list-style: none;

  h2 {
    margin: 24px 0;

    font-family: ${({ theme }) => theme.fontNames.playfairDisplay};
    font-size: ${({ theme }) => theme.fontSize.midLq};
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
    line-height: 37px;
  }

  ul {
    display: flex;
    gap: 35px;
    flex-wrap: wrap;

    li {
      width: 20%;
    }
  }
`;
