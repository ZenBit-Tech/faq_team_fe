import styled from '@emotion/styled';

import { Theme } from 'styles/theme.ts';

export const ProductImageWrapper = styled.div<{ theme?: Theme }>`
  background-color: ${({ theme }) => theme.colors.greyish_red};

  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
`;

export const ProductName = styled.h3<{ theme?: Theme }>`
  font-family: ${({ theme }) => theme.fontNames.playfairDisplay};
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  color: ${({ theme }) => theme.colors.primary_text};

  margin: 10px 0;
`;

export const ProductPrice = styled.p<{ theme?: Theme }>`
  font-family: ${({ theme }) => theme.fontNames.dmSans};
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  color: ${({ theme }) => theme.colors.gray};

  margin-bottom: 10px;
`;

export const VendorName = styled.p<{ theme?: Theme }>`
  font-family: ${({ theme }) => theme.fontNames.dmSans};
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  color: ${({ theme }) => theme.colors.primary_text};
`;

export const ProductInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
