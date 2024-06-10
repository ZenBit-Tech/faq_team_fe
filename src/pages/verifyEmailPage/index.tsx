import { OtpForm } from 'components/otpForm';
import { useTranslation } from 'react-i18next';
import {
  FormHeader,
  LogoContainer,
  FormSection,
  SubTitle,
  Title,
  FormContainer,
} from 'components/sharedUI/form/styles';
import bgImg from 'assets/images/verification.png';
import { ArrowBackLink } from 'components/arrowBackLink';
import { useAppSelector } from 'redux/hooks.ts';
import { links } from 'const/links';

const optAction = 'register';
export const VerifyEmailPage = () => {
  const { t } = useTranslation();
  const user = useAppSelector(state => state.auth.user);
  return (
    <FormSection>
      <LogoContainer img={bgImg}></LogoContainer>
      <FormContainer>
        <FormHeader>
          <Title>
            <ArrowBackLink link={links.backToSignIn} />
            {t('verificationEmail.title')}
          </Title>
          <SubTitle>{t('verificationEmail.subtitle')}</SubTitle>
        </FormHeader>
        <OtpForm email={user.email} action={optAction} />
      </FormContainer>
    </FormSection>
  );
};

export default VerifyEmailPage;
