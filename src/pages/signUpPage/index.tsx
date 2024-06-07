import { useTranslation } from 'react-i18next';
import {
  SignUpSection,
  PolicyLink,
  LogoContainer,
  ListContainer,
  FormHeader,
  FormContainer,
} from './styles';
import {
  LogoWrap,
  Title,
  SubTitle,
  Google,
  Text,
  SignUpLink,
} from '../signInPage/styles';
import bgImg from 'assets/images/sign-up.png';
import { ArrowBackLink } from 'components/arrowBackLink';
import LogoIcon from 'assets/icons/iconLogo';
import GoogleIcon from 'assets/icons/iconGoogle';
import { SignUpForm } from 'components/signUpForm';

const googleRoute: string = 'http://localhost:3000/google';
const backLink: string = '/faq_team_fe/signin';
const signinLink: string = '/signin';
const termsOfUseLink: string = '/terms-of-use';
const policyLink: string = '/privacy-policy';

const SignUpPage = () => {
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
            {t('signUp.title')}
          </Title>
          <SubTitle>{t('signUp.subtitle')}</SubTitle>
          <Google type="button" onClick={verifyGoogle}>
            <GoogleIcon />
            {t('signUp.google')}
          </Google>
          <Text>or</Text>
        </FormHeader>
        <SignUpForm />
        <SignUpLink to={signinLink}>
          <p>{t('signUp.signInLink')}</p>
          <span>{t('signUp.signIn')}</span>
        </SignUpLink>
        <ListContainer>
          <li>
            <PolicyLink to={policyLink}>{t('signUp.policyLink')}</PolicyLink>
          </li>
          <li>
            <PolicyLink to={termsOfUseLink}>{t('signUp.termsLink')}</PolicyLink>
          </li>
        </ListContainer>
      </FormContainer>
    </SignUpSection>
  );
};

export default SignUpPage;
