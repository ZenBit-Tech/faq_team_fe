import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useTranslation } from 'react-i18next';
import { NewPass } from 'components/newPassForm/types';
import {
  StyledForm,
  SubmitBtn,
  ErrorMsg,
} from 'components/sharedUI/form/styles';
import { useState } from 'react';
import EyeIcon from 'assets/icons/iconEye';
import EyeCloseIcon from 'assets/icons/iconEyeClose';
import { useNewPassMutation } from 'redux/authApiSlice.ts';

export const NewPassForm = ({ email }: { email: string }) => {
  const { t } = useTranslation();

  const [newPass, { isError, isLoading }] = useNewPassMutation();
  const signUpSchema = yup
    .object()
    .shape({
      password: yup
        .string()
        .min(8, t('validation.password'))
        .required(t('validation.credentials')),
      repeatedPassword: yup
        .string()
        .test(
          'isRepeatedPasswordValueMatched',
          t('validation.passwordMatch'),
          (value, { parent }) => !value || value === parent.password,
        )
        .min(8, t('validation.password'))
        .required(t('validation.credentials')),
    })
    .required();
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isSubmitting },
  } = useForm<NewPass>({
    defaultValues: {
      password: '',
      repeatedPassword: '',
    },
    resolver: yupResolver(signUpSchema),
  });

  const onSubmit: SubmitHandler<NewPass> = async data => {
    await newPass({ password: data.password, email });
  };

  const [isPasswordShown, setPasswordShown] = useState<boolean>(false);

  const handlePassword = () => {
    setPasswordShown(!isPasswordShown);
  };
  return (
    <>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="user-password">{t('signUp.password')}</label>
          <input
            type={isPasswordShown ? 'text' : 'password'}
            {...register('password')}
            className={errors.password ? 'error-input' : ''}
            placeholder={t('restorePasswordSignIn.passwordsPlaceholder')}
            id="user-password"
          />
          {errors.password && <ErrorMsg>{errors.password.message}</ErrorMsg>}
          <button type="button" onClick={handlePassword}>
            {isPasswordShown ? <EyeIcon /> : <EyeCloseIcon />}
          </button>
        </div>
        <div>
          <label htmlFor="repeated-password">
            {t('restorePasswordSignIn.repeatPassword')}
          </label>
          <input
            type={isPasswordShown ? 'text' : 'password'}
            {...register('repeatedPassword')}
            className={errors.password ? 'error-input' : ''}
            placeholder={t('restorePasswordSignIn.passwordsPlaceholder')}
            id="repeated-password"
          />
          {errors.repeatedPassword && (
            <ErrorMsg>{errors.repeatedPassword.message}</ErrorMsg>
          )}
          <button type="button" onClick={handlePassword}>
            {isPasswordShown ? <EyeIcon /> : <EyeCloseIcon />}
          </button>
        </div>
        {isError && <ErrorMsg>{t('validation.server')}</ErrorMsg>}
        <SubmitBtn
          type="submit"
          variant="black"
          disabled={!isDirty || isSubmitting}
        >
          {isLoading ? t('loading.text') : t('restorePasswordSignIn.button')}
        </SubmitBtn>
      </StyledForm>
    </>
  );
};
