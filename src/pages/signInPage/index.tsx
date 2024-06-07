import { useTranslation } from 'react-i18next';
import { SignUpLink, SubTitle, Title, Google, Text, LogoWrap } from './styles';
import bgImg from 'assets/images/sign-in.png';
import { ArrowBackLink } from 'components/arrowBackLink';
import {
  SignUpSection,
  LogoContainer,
  FormContainer,
  FormHeader,
  PolicyLink,
  ListContainer,
} from 'pages/signUpPage/styles';
import LogoIcon from 'assets/icons/iconLogo';
import { SignInForm } from 'components/signInForm';
import GoogleIcon from 'assets/icons/iconGoogle';

const googleRoute: string = 'http://localhost:3000/google';
const backLink: string = '/faq_team_fe/signin';
const signupLink: string = '/signup';
const termsOfUseLink: string = '/terms-of-use';
const policyLink: string = '/privacy-policy';

const SignInPage = () => {
  const { t } = useTranslation();

  const verifyGoogle = async () => {
    window.location.href = googleRoute;
  };

  return (
    <SignUpSection>
      <LogoContainer img={bgImg}>
        <LogoWrap>
          <LogoIcon width={203} height={56} />
        </LogoWrap>
      </LogoContainer>
      <FormContainer>
        <FormHeader>
          <Title>
            <ArrowBackLink link={backLink} />
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
        <SignUpLink to={signupLink}>
          <p>{t('signIn.signUpLink')}</p>
          <span>{t('signIn.signUp')}</span>
        </SignUpLink>
        <ListContainer>
          <li>
            <PolicyLink to={policyLink}>{t('signIn.policyLink')}</PolicyLink>
          </li>
          <li>
            <PolicyLink to={termsOfUseLink}>{t('signIn.termsLink')}</PolicyLink>
          </li>
        </ListContainer>
      </FormContainer>
    </SignUpSection>
  );
};

export default SignInPage;
