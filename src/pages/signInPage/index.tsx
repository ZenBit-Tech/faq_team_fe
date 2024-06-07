import { useTranslation } from 'react-i18next';
import { SignInForm } from 'src/components/signInForm';
import { SignUpLink, SubTitle, Title, Google, Text, LogoWrap } from './style';
import GoogleIcon from 'src/assets/icons/iconGoogle';
import LogoIcon from 'src/assets/icons/iconLogo';
import {
  FormHeader,
  ListContainer,
  LogoContainer,
  PolicyLink,
  SignUpSection,
} from 'src/pages/signUpPage/styles.ts';
import { FormContainer } from 'src/pages/signUpPage/styles.ts';
import bgImg from '../../assets/images/sign-in.png';
import { ArrowBackLink } from 'components/arrowBackLink';

const SignInPage = () => {
  const { t } = useTranslation();

  const verifyGoogle = async () => {
    window.location.href = 'http://localhost:3000/google';
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
            <ArrowBackLink link={'/faq_team_fe/signin'} />
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
        <SignUpLink to="/signup">
          <p>{t('signIn.signUpLink')}</p>
          <span>{t('signIn.signUp')}</span>
        </SignUpLink>
        <ListContainer>
          <li>
            <PolicyLink to="/privacy-policy">
              {t('signIn.policyLink')}
            </PolicyLink>
          </li>
          <li>
            <PolicyLink to="/terms-of-use">{t('signIn.termsLink')}</PolicyLink>
          </li>
        </ListContainer>
      </FormContainer>
    </SignUpSection>
  );
};

export default SignInPage;
