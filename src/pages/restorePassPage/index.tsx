import { useTranslation } from 'react-i18next';
import { RestorePassForm } from 'components/restorePassForm';
import { ArrowBackLink } from 'components/arrowBackLink';

import {
  SubTitle,
  Title,
  LogoWrap,
  FormHeader,
  LogoContainer,
  FormSection,
  FormContainer,
} from 'components/sharedUI/form/styles';
import LogoIcon from 'assets/icons/iconLogo';
import bgImg from 'assets/images/restore-pass.png';
import { links } from 'const/links';

const RestorePassPage = () => {
  const { t } = useTranslation();
  
  return (
    <FormSection>
      <LogoContainer img={bgImg}>
        <LogoWrap>
          <LogoIcon width={203} height={56} />
        </LogoWrap>
      </LogoContainer>
      <FormContainer>
        <FormHeader>
          <Title>
            <ArrowBackLink link={links.backToSignIn} />
            {t('restorePassword.title')}
          </Title>
          <SubTitle>{t('restorePassword.subtitle')}</SubTitle>
        </FormHeader>
        <RestorePassForm />
      </FormContainer>
    </FormSection>
  );
};

export default RestorePassPage;
