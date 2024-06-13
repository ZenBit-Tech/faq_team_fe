import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Tab, TabList, TabPanel } from 'react-tabs';
import StepFinished from 'assets/icons/steps/step_finished';
import FirstStepActive from 'assets/icons/steps/step1_active';
import SecondStepActive from 'assets/icons/steps/step2_active';
import SecondStepInactive from 'assets/icons/steps/step2_inactive';
import ThirdStepActive from 'assets/icons/steps/step3_active';
import ThirdStepInactive from 'assets/icons/steps/step3_inactive';
import FourthStepActive from 'assets/icons/steps/step4_active';
import FourthStepInactive from 'assets/icons/steps/step4_inactive';
import FifthStepActive from 'assets/icons/steps/step5_active';
import FifthStepInactive from 'assets/icons/steps/step5_inactive';
import AddressForm from 'components/fillProfileForm/addressCard';
import CreditCardForm from 'components/fillProfileForm/cardInfoCard';
import GeneralInfoCard from 'components/fillProfileForm/generalInfoCard';
import RoleCard from 'components/fillProfileForm/roleCard';
import { StyledButton } from 'components/fillProfileForm/sharedStyles';
import SizeForm from 'components/fillProfileForm/sizeCard';
import {
  ButtonsContainer,
  StyledTabs,
  TabsContainer,
  TabsHeader,
  TabsSection,
} from 'components/fillProfileForm/styles';
import { ButtonVariant } from 'components/fillProfileForm/types';

const firstTabIndex = 0;

const FillProfileForm = () => {
  const { t } = useTranslation();

  const [selectedIndex, setSelectedIndex] = useState(firstTabIndex);
  const iconsActive = [
    <FirstStepActive />,
    <SecondStepActive />,
    <ThirdStepActive />,
    <FourthStepActive />,
    <FifthStepActive />,
  ];
  const iconsInactive = [
    <></>,
    <SecondStepInactive />,
    <ThirdStepInactive />,
    <FourthStepInactive />,
    <FifthStepInactive />,
  ];
  const tabs = [
    <RoleCard />,
    <GeneralInfoCard />,
    <AddressForm />,
    <CreditCardForm />,
    <SizeForm />,
  ];

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
                {index < selectedIndex && <StepFinished />}
                {index === selectedIndex && iconsActive[index]}
                {index > selectedIndex && iconsInactive[index]}
                <p>{t(`fillProfile.tab${index + 1}`)}</p>
              </Tab>
            ))}
          </TabList>

          {tabs.map((tab, index) => (
            <TabPanel>
              {tab}
              <ButtonsContainer>
                {index > firstTabIndex && (
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
