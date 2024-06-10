import { useTranslation } from 'react-i18next';
import LogoIcon from 'assets/icons/iconLogo';
import { NewPassForm } from 'components/newPassForm';
import { ArrowBackLink } from 'components/arrowBackLink';
import {
  LogoWrap,
  Title,
  SubTitle,
  FormHeader,
  LogoContainer,
  FormSection,
  FormContainer,
} from 'components/sharedUI/form/styles';
import bgImg from 'assets/images/new-pass.png';
import { useAppSelector } from 'redux/hooks.ts';
import { links } from 'const/links';

const NewPassPage = () => {
  const { t } = useTranslation();
  const user = useAppSelector(state => state.auth.user);
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
            {t('restorePasswordSignIn.title')}
          </Title>
          <SubTitle>{t('restorePasswordSignIn.subtitle')}</SubTitle>
        </FormHeader>
        <NewPassForm email={user.email} />
      </FormContainer>
    </FormSection>
  );
};

export default NewPassPage;
