import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useTranslation } from 'react-i18next';
import { RestorePass } from 'components/restorePassForm/types';
import {
  StyledForm,
  SubmitBtn,
  ErrorMsg,
} from 'components/sharedUI/form/styles';
import { useRestorePassMutation } from 'redux/authApiSlice';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'redux/hooks.ts';
import { setEmail } from 'redux/auth/authSlice.ts';
import { paths } from 'const/paths';

export const RestorePassForm = () => {
  const [sendOtp, { isError, isLoading }] = useRestorePassMutation();
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const signInSchema = yup
    .object()
    .shape({
      email: yup
        .string()
        .email(t('validation.email'))
        .required(t('validation.creadentials')),
    })
    .required();
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isSubmitting },
    setError,
  } = useForm<RestorePass>({
    defaultValues: {
      email: '',
    },
    resolver: yupResolver(signInSchema),
  });

  const onSubmit: SubmitHandler<RestorePass> = async data => {
    try {
      await sendOtp(data).unwrap();
      dispatch(setEmail(data.email));
      navigate(paths.verify);
    } catch (error) {
      setError('root', {
        type: 'server',
        message: t('validation.server'),
      });
    }
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="user-email">{t('signIn.email')}</label>
          <input
            type="text"
            {...register('email')}
            className={errors.email ? 'error-input' : ''}
            placeholder={t('signIn.emailPlaceholder')}
            id="user-email"
          />
          {errors.email && <ErrorMsg>{errors.email.message}</ErrorMsg>}
        </div>
        {isError && <ErrorMsg>{t('validation.server')}</ErrorMsg>}
        <SubmitBtn
          type="submit"
          variant="black"
          disabled={!isDirty || isSubmitting}
        >
          {isLoading ? t('loading.text') : t('restorePassword.button')}
        </SubmitBtn>
      </StyledForm>
    </>
  );
};
