import { useState } from 'react';
import {
  StyledTabs,
  TabsSection,
  TabsHeader,
  TabsContainer,
  StyledButton,
  ButtonsContainer,
} from 'components/fillProfileForm/styles';
import { TabList, Tab, TabPanel } from 'react-tabs';
import RoleCard from 'components/fillProfileForm/roleCard';
import GeneralInfoCard from 'components/fillProfileForm/generalInfoCard';
import { useTranslation } from 'react-i18next';
import { ButtonVariant } from 'components/fillProfileForm/types';

const FillProfileForm = () => {
  const { t } = useTranslation();

  const [selectedIndex, setSelectedIndex] = useState(0);
  const tabs = [<RoleCard />, <GeneralInfoCard />];

  return (
    <TabsSection>
      <TabsContainer>
        <TabsHeader>{t('fillProfile.header')}</TabsHeader>
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
                {t('fillProfile.tab1')}
              </Tab>
            ))}
          </TabList>

          {tabs.map((tab, index) => (
            <TabPanel>
              {tab}
              <ButtonsContainer>
                {index > 0 && (
                  <StyledButton
                    variant={ButtonVariant.White}
                    onClick={() => setSelectedIndex(index - 1)}
                  >
                    {t('fillProfile.prevButton')}
                  </StyledButton>
                )}
                {index < tabs.length - 1 && (
                  <StyledButton
                    variant={ButtonVariant.Black}
                    onClick={() => setSelectedIndex(index + 1)}
                  >
                    {t('fillProfile.nextButton')}
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
