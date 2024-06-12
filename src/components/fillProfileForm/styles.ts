import styled from '@emotion/styled';
import { Tabs } from 'react-tabs';
import { Theme } from 'styles/theme';
import { ButtonVariant, buttonProps } from 'components/fillProfileForm/types';

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
    background-color: ${({ theme }) => theme.colors.pastel_green};
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

export const StyledButton = styled.button<{ theme?: Theme } & buttonProps>`
  min-width: 100px;
  padding: 8px;
  margin: 5px;
  border: solid;
  border-color: ${({ theme }) => theme.colors.black};
  border-width: 1px;
  background-color: ${props =>
    props.variant === ButtonVariant.White
      ? ({ theme }) => theme.colors.white
      : ({ theme }) => theme.colors.black};
  color: ${props =>
    props.variant === ButtonVariant.White
      ? ({ theme }) => theme.colors.black
      : ({ theme }) => theme.colors.white};
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
