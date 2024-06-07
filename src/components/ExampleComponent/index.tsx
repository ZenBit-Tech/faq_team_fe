import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useTranslation } from 'react-i18next';
import { ExampleForm } from './styles';
import EyeIcon from 'src/assets/icons/iconEye';
import EyeCloseIcon from 'src/assets/icons/iconEyeClose';
import LeftArrowIcon from 'src/assets/icons/iconLeftArrow';
import RightArrowIcon from 'src/assets/icons/iconRightArrow';
const schema = yup
  .object()
  .shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
  })
  .required();

type Inputs = {
  name: string;
  email: string;
};

export const ExampleComponent = (): JSX.Element => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      name: '',
      email: '',
    },
    resolver: yupResolver(schema),
  });
  const onSubmit: SubmitHandler<Inputs> = data => {
    return JSON.stringify(data);
  };
  return (
    <>
      <ExampleForm onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="user-name">{t('exampleFormText.nameInput')}</label>
          <input
            type="text"
            {...register('name')}
            placeholder="Name"
            id="user-name"
          />
          {errors.name && <p>{errors.name.message}</p>}
        </div>
        <EyeIcon />
        <EyeCloseIcon />
        <LeftArrowIcon />
        <RightArrowIcon />
        <div>
          <label htmlFor="user-email">{t('exampleFormText.emailInput')}</label>
          <input
            type="email"
            {...register('email')}
            placeholder="Email"
            id="user-email"
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <button type="submit">{t('exampleFormText.submitButton')}</button>
      </ExampleForm>
    </>
  );
};
