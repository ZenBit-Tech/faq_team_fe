import styled from '@emotion/styled';

import { Theme } from 'styles/theme.ts';

export const ProductFeedContainer = styled.div`
  display: flex;

  padding: 0 63px;
`;
export const FilterSection = styled.div`
  width: 23%;

  padding: 24px;
`;
export const ProductsSection = styled.div`
  width: 75%;
`;
export const AppliedFiltersWrapper = styled.div<{ theme?: Theme }>`
  display: flex;
  justify-content: space-between;

  p {
    font-family: ${({ theme }) => theme.fontNames.inter};
    font-size: ${({ theme }) => theme.fontSize.md};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    line-height: 26px;
  }
`;
export const SortSelect = styled.div``;
