import * as yup from 'yup';
import { useTranslation } from 'react-i18next';

export const useConfirmCredentialsSchema = () => {
  const { t } = useTranslation();
  const confirmSchema = yup
    .object()
    .shape({
      email: yup
        .string()
        .email(t('validation.email'))
        .required(t('validation.credentials')),
      full_name: yup.string().required(t('validation.credentials')),
    })
    .required();

  return confirmSchema;
};
