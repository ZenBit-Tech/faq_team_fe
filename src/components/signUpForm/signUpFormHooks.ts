import { useTranslation } from 'react-i18next';
import * as yup from 'yup';

export const useSignUpSchema = () => {
  const { t } = useTranslation();

  const signUpSchema = yup
    .object()
    .shape({
      name: yup.string().required(t('validation.credentials')),
      email: yup
        .string()
        .email(t('validation.email'))
        .required(t('validation.credentials')),
      password: yup
        .string()
        .min(8, t('validation.password'))
        .required(t('validation.credentials')),
      repeatedPassword: yup
        .string()
        .test(
          'isRepeatedPasswordValueMatched',
          t('validation.repeatedPassword'),
          (value, { parent }) => !value || value === parent.password,
        )
        .min(8, t('validation.password'))
        .required(t('validation.credentials')),
    })
    .required();

  return signUpSchema;
};
