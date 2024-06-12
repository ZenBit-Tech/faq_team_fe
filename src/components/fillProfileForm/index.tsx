import { useState } from 'react';
import {
  StyledTabs,
  TabsSection,
  TabsHeader,
  TabsContainer,
  StyledButton,
  ButtonsContainer,
} from './styles';
import { TabList, Tab, TabPanel } from 'react-tabs';
import RoleCard from './roleCard';

const FillProfileForm = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const tabs = [<RoleCard />, 2, 3, 4, 5];

  return (
    <TabsSection>
      <TabsContainer>
        <TabsHeader>Fill Profile</TabsHeader>
        <StyledTabs selectedIndex={selectedIndex}>
          <TabList>
            {tabs.map((tab, index) => (
              <Tab
                className={
                  index < selectedIndex + 1
                    ? 'react-tabs__tab--before-selected'
                    : 'react-tabs__tab'
                }
              >
                Title {index + 1}
              </Tab>
            ))}
          </TabList>

          {tabs.map((tab, index) => (
            <TabPanel>
              {tab}
              <ButtonsContainer>
                {index > 0 && (
                  <StyledButton
                    variant={'white'}
                    onClick={() => setSelectedIndex(index - 1)}
                  >
                    Prev
                  </StyledButton>
                )}
                {index < 4 && (
                  <StyledButton
                    variant={'black'}
                    onClick={() => setSelectedIndex(index + 1)}
                  >
                    Next
                  </StyledButton>
                )}
              </ButtonsContainer>
            </TabPanel>
          ))}
        </StyledTabs>
      </TabsContainer>
    </TabsSection>
  );
};

export default FillProfileForm;
