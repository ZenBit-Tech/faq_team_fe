import { useTranslation } from 'react-i18next';

import { MainHeading } from 'components/mainHeading';
import {
  MainTitle,
  StyledSection,
  Text,
  Title,
  Wrapper,
} from 'components/sharedUI/text/styles';

const PrivacyPolicyPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <MainHeading>{t('privacyPolicy.heading')}</MainHeading>
      <StyledSection>
        <Wrapper>
          <div>
            <MainTitle>{t('privacyPolicy.title')}</MainTitle>
            <Text>{t('privacyPolicy.text')}</Text>
          </div>
          <div>
            <Title>{t('privacyPolicy.title')}</Title>
            <Text>{t('privacyPolicy.text')}</Text>
          </div>
          <div>
            <Title>{t('privacyPolicy.title')}</Title>
            <Text>{t('privacyPolicy.text')}</Text>
          </div>
          <div>
            <Title>{t('privacyPolicy.title')}</Title>
            <Text>{t('privacyPolicy.text')}</Text>
          </div>
          <div>
            <Title>{t('privacyPolicy.title')}</Title>
            <Text>{t('privacyPolicy.text')}</Text>
          </div>
          <div>
            <Title>{t('privacyPolicy.title')}</Title>
            <Text>{t('privacyPolicy.text')}</Text>
          </div>
        </Wrapper>
      </StyledSection>
    </>
  );
};

export default PrivacyPolicyPage;
