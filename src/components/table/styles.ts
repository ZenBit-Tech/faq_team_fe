import styled from '@emotion/styled';
import { Theme } from 'styles/theme';

export const Inner = styled.div<{ theme?: Theme }>`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  height: 84vh;
  display: flex;
  flex-direction: column;
  padding: 20px;
}
`;
export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;
`;
export const TableContainer = styled.div<{ theme?: Theme }>`
 flex: 1 1 auto;
 overflow-y: auto;
}
`;

export const Thead = styled.thead<{ theme?: Theme }>`
  background-color: ${({ theme }) => theme.colors.for_tables};
`;

export const Th = styled.th<{ theme?: Theme }>`
  padding: 12px 15px;
  border: 1px solid ${({ theme }) => theme.colors.for_tables};
  font-family: ${({ theme }) => theme.fontNames.playfairDisplay};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
`;

export const Tbody = styled.tbody<{ theme?: Theme }>`
  tr {
    background-color: ${({ theme }) => theme.colors.white};
  }
`;

export const Td = styled.td<{ theme?: Theme }>`
  min-height: 102px;
  padding: 20px;
  border-top: 1px solid ${({ theme }) => theme.colors.for_tables};
  border-bottom: 1px solid ${({ theme }) => theme.colors.for_tables};
  font-family: ${({ theme }) => theme.fontNames.dmSans};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  font-size: ${({ theme }) => theme.fontSize.md};
`;

export const ActionBtn = styled.button<{ theme?: Theme }>`
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.white};
`;
export const TdInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
`;
