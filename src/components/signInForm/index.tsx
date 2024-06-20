import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'react-i18next';
import { Inputs } from './types';
import {
  StyledForm,
  PasswordLink,
  SubmitBtn,
  ErrorMsg,
} from 'components/sharedUI/form/styles';
import { useState } from 'react';
import { useSignInSchema } from './signInFormHook';
import { useLoginMutation, useRestorePassMutation } from 'redux/authApiSlice';
import { useAppDispatch } from 'redux/hooks';
import { useNavigate } from 'react-router-dom';
import { setToken } from 'redux/auth/authSlice';
import {
  isErrorWithMessage,
  isFetchBaseQueryError,
} from 'helpers/errorHandler';
import EyeIcon from 'assets/icons/iconEye';
import EyeCloseIcon from 'assets/icons/iconEyeClose';
import { paths } from 'const/paths';

export const SignInForm = () => {
  const [login, { isLoading }] = useLoginMutation();
  const [sendOtp] = useRestorePassMutation();

  const dispatch = useAppDispatch();

  const { t } = useTranslation();
  const singInSchema = useSignInSchema();
  const navigate = useNavigate();

  const {
    register,
    setError,
    reset,
    handleSubmit,
    formState: { errors, isDirty, isSubmitting },
  } = useForm<Inputs>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(singInSchema),
  });

  const onSubmit: SubmitHandler<Inputs> = async data => {
    try {
      const response = await login(data).unwrap();
      if (!response?.is_verified) {
        await sendOtp(data.email);
        reset();
        navigate('');
      } else {
        dispatch(setToken(response?.access_token));
        console.log(response.access_token);
        navigate(paths.root);
      }
    } catch (err) {
      if (isFetchBaseQueryError(err)) {
        const errMsg = 'error' in err ? err.error : JSON.stringify(err.data);
        setError('root', {
          message: errMsg,
        });
      } else if (isErrorWithMessage(err)) {
        setError('root', {
          message: err.message,
        });
      }
    }
  };

  const [isPasswordShown, setPasswordShown] = useState<boolean>(false);

  const handlePassword = () => {
    setPasswordShown(!isPasswordShown);
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
        <div>
          <label htmlFor="user-password">{t('signIn.password')}</label>
          <input
            type={isPasswordShown ? 'text' : 'password'}
            {...register('password')}
            className={errors.password ? 'error-input' : ''}
            placeholder={t('signIn.passwordPlaceholder')}
            id="user-password"
          />
          {errors.password && <ErrorMsg>{errors.password.message}</ErrorMsg>}
          <button type="button" onClick={handlePassword}>
            {isPasswordShown ? <EyeIcon /> : <EyeCloseIcon />}
          </button>
        </div>
        <PasswordLink to={paths.restorePassword}>
          {t('signIn.forgotPassLink')}
        </PasswordLink>
        {errors.root && <ErrorMsg>{errors.root.message}</ErrorMsg>}
        <SubmitBtn
          type="submit"
          variant="black"
          disabled={!isDirty || isSubmitting}
        >
          {isLoading ? t('loading.text') : t('signIn.submitBtn')}
        </SubmitBtn>
      </StyledForm>
    </>
  );
};
