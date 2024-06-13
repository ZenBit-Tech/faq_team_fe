import { Tabs } from 'react-tabs';
import styled from '@emotion/styled';
import { Theme } from 'styles/theme';

export const TabsSection = styled.div<{ theme?: Theme }>`
  background-color: ${({ theme }) => theme.colors.for_card_bg};
  min-height: 800px;
  height: 100vh;
  display: flex;
  align-items: start;
  justify-content: center;
`;

export const TabsHeader = styled.div`
  min-height: 50px;
  height: 20%;
  display: flex;
  align-items: center;
`;

export const TabsContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
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
  }
  }
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: end;
`;
