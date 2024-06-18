import { useTranslation } from 'react-i18next';

import { MainHeading } from 'components/mainHeading';
import {
  MainTitle,
  StyledSection,
  Text,
  Title,
  Wrapper,
} from 'components/sharedUI/text/styles';

export const TermsOfUsePage = () => {
  const { t } = useTranslation();
  return (
    <>
      <MainHeading>{t('termsConditions.heading')}</MainHeading>
      <StyledSection>
        <Wrapper>
          <div>
            <MainTitle>{t('termsConditions.title')}</MainTitle>
            <Text>{t('termsConditions.text')}</Text>
          </div>
          <div>
            <Title>{t('termsConditions.title')}</Title>
            <Text>{t('termsConditions.text')}</Text>
          </div>
          <div>
            <Title>{t('termsConditions.title')}</Title>
            <Text>{t('termsConditions.text')}</Text>
          </div>
          <div>
            <Title>{t('termsConditions.title')}</Title>
            <Text>{t('termsConditions.text')}</Text>
          </div>
          <div>
            <Title>{t('termsConditions.title')}</Title>
            <Text>{t('termsConditions.text')}</Text>
          </div>
          <div>
            <Title>{t('termsConditions.title')}</Title>
            <Text>{t('termsConditions.text')}</Text>
          </div>
        </Wrapper>
      </StyledSection>
    </>
  );
};

export default TermsOfUsePage;
