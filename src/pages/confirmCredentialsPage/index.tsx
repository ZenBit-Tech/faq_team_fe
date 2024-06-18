import { useTranslation } from 'react-i18next';
import bgImg from 'src/assets/images/sign-up.png';

import { ArrowBackLink } from 'components/arrowBackLink';
import { ConfirmCredentialsForm } from 'components/confirmCredentialsForm';
import {
  ErrorMsg,
  FormContainer,
  FormHeader,
  FormSection,
  LogoContainer,
  Title,
} from 'components/sharedUI/form/styles';
import { links } from 'const/links';

import UseGetUserInfoHook from './getUserInfoHook';

const ConfirmCredentialsPage = () => {
  const { t } = useTranslation();
  const { isError, error, user } = UseGetUserInfoHook();

  return (
    <FormSection>
      <LogoContainer img={bgImg}></LogoContainer>
      <FormContainer>
        <FormHeader>
          <Title>
            <ArrowBackLink link={links.backToSignIn} />
            {t('confirmCredentials.title')}
          </Title>
        </FormHeader>
        <ConfirmCredentialsForm
          email_value={user.email}
          full_name={user.full_name}
          id={user.user_id}
        />
      </FormContainer>
      {isError ? <ErrorMsg>{error}</ErrorMsg> : null}
    </FormSection>
  );
};

export default ConfirmCredentialsPage;
