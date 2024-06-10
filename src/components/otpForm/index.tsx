import { useTranslation } from 'react-i18next';
import {
  InputContainer,
  OtpFrom,
  ResendButton,
  VerifyBtn,
  VerifyInfoContainer,
} from 'components/otpForm/styles.ts';
import {
  useRestorePassMutation,
  useVerifyOtpMutation,
} from 'redux/authApiSlice.ts';
import { useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm, Controller } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { OptFormProps, OtpFormValue } from 'components/otpForm/types';
import { paths } from 'const/paths';
import { useRef } from 'react';
import { otpFormVersions } from 'const/constants';
import { otpExpirationTime, clockPrecision, otpNumberOfDigits} from 'const/constants';

export const OtpForm = ({ email, action }: OptFormProps) => {
  const { t } = useTranslation();

  const [timer, setTimer] = useState<number>(otpExpirationTime);

  const [verifyOtp] = useVerifyOtpMutation();
  const [sendOtp] = useRestorePassMutation();
  const navigate = useNavigate();

  const otpBoxReference = useRef<Array<HTMLInputElement | null>>([]);

  const { control, handleSubmit, setError } = useForm<OtpFormValue>({
    defaultValues: {
      otpInput0: '',
      otpInput1: '',
      otpInput2: '',
      otpInput3: '',
      otpInput4: '',
      otpInput5: '',
    },
  });

  function handleChange(value: string, index: number) {
    if (value && index < otpNumberOfDigits - 1) {
      otpBoxReference.current[index + 1]?.focus();
    }
  }

  const handleBackspaceAndEnter = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    if (e.key === 'Backspace' && !e.currentTarget.value && index > 0) {
      otpBoxReference.current[index - 1]?.focus();
    }
    if (
      e.key === 'Enter' &&
      e.currentTarget.value &&
      index < otpNumberOfDigits - 1
    ) {
      otpBoxReference.current[index + 1]?.focus();
    }
  };

  const checkOtp: SubmitHandler<OtpFormValue> = async data => {
    try {
      let otpCode = '';
      for (const element of Object.keys(data)) {
        otpCode += data[element as keyof OtpFormValue];
      }
      await verifyOtp({
        otp_code: otpCode,
        email,
      }).unwrap();

      if (action === otpFormVersions.verifyEmail) {
        navigate(paths.root);
      } else {
        navigate(paths.newPassword);
      }
    } catch (error) {
      if (error instanceof Error && error.code === 401) {
        setError('root', {
          type: 'server',
          message: t('otpVerification.otpWrong'),
        });
      } else {
        setError('root', {
          type: 'server',
          message: t('otpVerification.server'),
        });
      }
    }
  };

  const resetTimer = () => {
    setTimer(otpExpirationTime);
  };

  const resend = async () => {
    try {
      await sendOtp(email).unwrap();
      resetTimer();
    } catch (error) {
      setError('root', {
        type: 'server',
        message: t('validation.server'),
      });
    }
  };

  useEffect(() => {
    if (timer > 0) {
      const timeoutId = setTimeout(() => setTimer(timer - 1), clockPrecision);
      return () => clearTimeout(timeoutId);
    }
  }, [timer]);

  return (
    <OtpFrom onSubmit={handleSubmit(checkOtp)}>
      <InputContainer>
        {new Array(6).fill(null).map((_, index) => (
          <Controller
            key={index}
            name={`otpInput${index}` as keyof OtpFormValue}
            control={control}
            render={({ field }) => (
              <input
                type="text"
                placeholder="1"
                maxLength={1}
                ref={reference => (otpBoxReference.current[index] = reference)}
                value={field.value}
                onChange={e => {
                  field.onChange(e);
                  handleChange(e.target.value, index);
                }}
                onKeyUp={e => handleBackspaceAndEnter(e, index)}
              />
            )}
          />
        ))}
      </InputContainer>
      <VerifyInfoContainer>
        <div>
          {t('verificationEmail.expired')} {timer}
        </div>
        <ResendButton onClick={resend}>
          {t('verificationEmail.resend')}
        </ResendButton>
      </VerifyInfoContainer>
      <VerifyBtn type={'submit'} variant="black">
        {t('verificationEmail.submitBtn')}
      </VerifyBtn>
    </OtpFrom>
  );
};
