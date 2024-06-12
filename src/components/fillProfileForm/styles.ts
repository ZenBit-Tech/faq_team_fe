import styled from '@emotion/styled';
import { Tabs } from 'react-tabs';

export const TabsSection = styled.div`
  background-color: grey;
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

export const StyledTabs = styled(Tabs)`
  // height: 80%;
  background-color: white;
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
    &:hover {
    }

    &.react-tabs__tab--selected {
    }

    &.react-tabs__tab--disabled {
    }
  }

  .react-tabs__tab--before-selected {
    flex-grow: 1;
    text-align: center;
    background-color: cyan;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px 0px 0px 0px;
  }

  .react-tabs__tab-panel {
    &.react-tabs__tab-panel--selected {
    }
  }
`;
export interface buttonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: string;
}
export const StyledButton = styled.button<buttonProps>`
  min-width: 100px;
  padding: 8px;
  margin: 5px;
  border: solid;
  border-color: black;
  border-width: 1px;
  background-color: ${props => (props.variant === 'white' ? 'white' : 'black')};
  color: ${props => (props.variant === 'white' ? 'black' : 'white')};
  border-radius: 8px;
  display: flex;
  gap: 5px;
  justify-content: center;
  align-items: center;
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: end;
`;
