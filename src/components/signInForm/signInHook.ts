import * as yup from 'yup';
import { useTranslation } from 'react-i18next';

export const useSignInSchema = () => {
  const { t } = useTranslation();
  const signInSchema = yup
    .object()
    .shape({
      email: yup
        .string()
        .email(t('validation.email'))
        .required('Please enter your credentials'),
      password: yup
        .string()
        .min(8, 'Password format is incorrect')
        .required('Please enter your credentials'),
    })
    .required();

  return signInSchema;
};
