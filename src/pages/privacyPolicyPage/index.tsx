import { MainHeading } from 'components/mainHeading';
import {
  StyledSection,
  Title,
  Wrapper,
  Text,
  MainTitle,
} from 'components/sharedUI/text/styles';
import { useTranslation } from 'react-i18next';

const PrivacyPolicyPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <MainHeading>Privacy Policy</MainHeading>
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
