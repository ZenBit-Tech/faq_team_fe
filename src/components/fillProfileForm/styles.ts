import { Tabs } from 'react-tabs';
import styled from '@emotion/styled';
import { Theme } from 'styles/theme';

export const TabsSection = styled.div<{ theme?: Theme }>`
  background-color: ${({ theme }) => theme.colors.for_card_bg};
  height: 100vh;
  display: flex;
  align-items: start;
  justify-content: center;
`;

export const TabsHeader = styled.div<{ theme?: Theme }>`
  min-height: 50px;
  height: 20%;
  display: flex;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    display: none;
  }
`;

export const TabsContainer = styled.div<{ theme?: Theme }>`
  width: 80%;
  display: flex;
  flex-direction: column;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    height: 100%;
    width: 100%;
  }
`;

export const StyledTabs = styled(Tabs)<{ theme?: Theme }>`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 5px;

  .react-tabs__tab-list {
    list-style-type: none;
    display: flex;
    justify-content: space-evenly;
    height: 72px;
  }

  .react-tabs__tab-panel--selected {
    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
      height: 90vh;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
  }
  }

  .react-tabs__tab {
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px 0px 0px 0px;
    border: solid  ${({ theme }) => theme.colors.greyish_red};
    border-width: 0px 0px 1px 1px;

    p {
      margin: 10px;
    }
      
    @media (max-width: ${({ theme }) => theme.breakpoint.laptop}) {
      p {
        display: none;
      }
    }
  }

  .react-tabs__tab--before-selected {
    flex-grow: 1;
    text-align: center;
    background-color: ${({ theme }) => theme.colors.pastel_green};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px 0px 0px 0px;
    border: solid  ${({ theme }) => theme.colors.greyish_red};
    border-width: 0px 0px 1px 1px;

    p {
      margin: 10px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.laptop}) {
      p {
        display: none;
      }
    }
  }
  }
`;
