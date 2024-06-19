import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Tab, TabList, TabPanel } from 'react-tabs';
import { v4 as uuidv4 } from 'uuid';

import StepFinished from 'assets/icons/steps/step_finished';
import {
  iconsActive,
  iconsInactive,
  tabs,
} from 'components/fillProfileForm/constants';
import {
  StyledTabs,
  TabsContainer,
  TabsHeader,
  TabsSection,
} from 'components/fillProfileForm/styles';

const firstTabIndex = 3;

const FillProfileForm = () => {
  const { t } = useTranslation();

  const [selectedIndex, setSelectedIndex] = useState(firstTabIndex);

  return (
    <TabsSection>
      <TabsContainer>
        <TabsHeader>{t('fillProfile.header')}</TabsHeader>
        <StyledTabs selectedIndex={selectedIndex} onSelect={() => {}}>
          <TabList>
            {tabs.map((tab, index) => (
              <Tab
                key={uuidv4()}
                className={
                  index < selectedIndex + 1
                    ? 'react-tabs__tab--before-selected'
                    : 'react-tabs__tab'
                }
              >
                {index < selectedIndex && <StepFinished />}
                {index === selectedIndex && iconsActive[index]}
                {index > selectedIndex && iconsInactive[index]}
                <p>{t(`fillProfile.tab${index + 1}`)}</p>
              </Tab>
            ))}
          </TabList>

          {tabs.map((Component, index) => (
            <TabPanel key={uuidv4()}>
              <div>{Component({ setSelectedIndex, index })}</div>
            </TabPanel>
          ))}
        </StyledTabs>
      </TabsContainer>
    </TabsSection>
  );
};

export default FillProfileForm;
