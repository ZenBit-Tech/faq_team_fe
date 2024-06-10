import * as yup from 'yup';
import { useTranslation } from 'react-i18next';

export const useSignInSchema = () => {
  const passwordLength: number = 8;
  const { t } = useTranslation();
  const signInSchema = yup
    .object()
    .shape({
      email: yup
        .string()
        .email(t('validation.email'))
        .required(t('validation.credentials')),
      password: yup
        .string()
        .min(passwordLength, t('validation.password'))
        .required(t('validation.credentials')),
    })
    .required();

  return signInSchema;
};
