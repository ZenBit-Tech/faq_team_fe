import { useTranslation } from 'react-i18next';
import bgImg from 'assets/images/sign-in.png';
import { ArrowBackLink } from 'components/arrowBackLink';
import {
  FormSection,
  LogoContainer,
  FormContainer,
  FormHeader,
  PolicyLink,
  ListContainer,
  FormLink,
  SubTitle,
  Title,
  Google,
  Text,
  LogoWrap,
} from 'components/sharedUI/form/styles';
import LogoIcon from 'assets/icons/iconLogo';
import { SignInForm } from 'components/signInForm';
import GoogleIcon from 'assets/icons/iconGoogle';
import { paths } from 'const/paths';
import { links } from 'const/links';

const SignInPage = () => {
  const { t } = useTranslation();

  const verifyGoogle = async () => {
    window.location.href = links.googleRoute;
  };

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
            <ArrowBackLink link={links.backToSignUp} />
            {t('signIn.title')}
          </Title>
          <SubTitle>{t('signIn.subtitle')}</SubTitle>
          <Google type="button" onClick={verifyGoogle}>
            <GoogleIcon />
            {t('signIn.google')}
          </Google>
          <Text>or</Text>
        </FormHeader>
        <SignInForm />
        <FormLink to={paths.signUp}>
          <p>{t('signIn.signUpLink')}</p>
          <span>{t('signIn.signUp')}</span>
        </FormLink>
        <ListContainer>
          <li>
            <PolicyLink to={paths.privacyPolicy}>
              {t('signIn.policyLink')}
            </PolicyLink>
          </li>
          <li>
            <PolicyLink to={paths.termsOfUse}>
              {t('signIn.termsLink')}
            </PolicyLink>
          </li>
        </ListContainer>
      </FormContainer>
    </FormSection>
  );
};

export default SignInPage;
