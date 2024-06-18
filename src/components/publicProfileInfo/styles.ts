import styled from '@emotion/styled';
import { Theme } from 'styles/theme.ts';

export const PublicProfileInfoWrapper = styled.div<{ theme?: Theme }>`
  width: 65%;

  .react-tabs__tab-list {
    display: flex;
    width: 33%;
  }

  .react-tabs__tab {
    width: 50%;
    padding: 10px 0;
    border-radius: 8px;
    text-align: center;
    color: ${({ theme }) => theme.colors.primary_text};
    background-color: ${({ theme }) => theme.colors.greyish_red};

    cursor: pointer;
  }

  .react-tabs__tab--selected {
    width: 50%;
    padding: 10px 0;
    background-color: #333333;
    border-radius: 8px;
    text-align: center;
    color: ${({ theme }) => theme.colors.white};

    cursor: initial;
  }
`;
