import { useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import {
  defaultCountries,
  parseCountry,
  PhoneInput,
} from 'react-international-phone';
import { yupResolver } from '@hookform/resolvers/yup';
import { v4 as uuidv4 } from 'uuid';
import * as yup from 'yup';

import UploadAvatar from 'assets/icons/uploadAvatar';
import avatar from 'assets/images/avatar.png';
import {
  PhoneWrapper,
  StyledImage,
  UploadPhotoWrapper,
} from 'components/fillProfileForm/generalInfoCard/styles';
import {
  convertToBase64,
  isValidFileList,
} from 'components/fillProfileForm/generalInfoCard/utils';
import {
  ButtonsContainer,
  StyledButton,
  StyledForm,
  StyledFormContainer,
  StyledSubtitle,
  StyledTabContainer,
  StyledTitle,
} from 'components/fillProfileForm/sharedStyles';
import {
  ButtonVariant,
  GeneralInfoSchema,
  TabProps,
} from 'components/fillProfileForm/types';

import 'react-international-phone/style.css';

const countryCodes = ['ca'];

const countries = defaultCountries.filter(country => {
  const { iso2 } = parseCountry(country);
  return countryCodes.includes(iso2);
});

const GeneralInfoCard = ({ setSelectedIndex, index }: TabProps) => {
  const { t } = useTranslation();

  const schema = yup.object().shape({
    image: yup
      .mixed()
      .test('fileType', t('fillProfile.generalInfoCard.imageRequired'), value =>
        isValidFileList(value as FileList),
      ),
    phone: yup.string().min(10, t('fillProfile.generalInfoCard.phoneRequired')),
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
    register,
  } = useForm<GeneralInfoSchema>({
    resolver: yupResolver(schema),
  });

  const [selectedImage, setSelectedImage] = useState('');
  const { ref: registerRef, onChange, ...rest } = register('image');

  const handleButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>,
  ): void => {
    const inputElement = event.currentTarget.children[0] as HTMLInputElement;
    inputElement.click();
  };

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    if (event.target.files) {
      const file = event.target.files[0];
      const fileURL = URL.createObjectURL(file);
      setSelectedImage(fileURL);
    }
  };

  const onSubmit: SubmitHandler<GeneralInfoSchema> = async (
    data,
  ): Promise<void> => {
    await convertToBase64(data.image[0]);
    setSelectedIndex(index + 1);
  };

  return (
    <StyledTabContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <StyledForm>
          <StyledFormContainer>
            <StyledTitle>
              {t('fillProfile.generalInfoCard.photoTitle')}
            </StyledTitle>
            <StyledSubtitle>
              {t('fillProfile.generalInfoCard.photoSubTitle')}
            </StyledSubtitle>
          </StyledFormContainer>
          <UploadPhotoWrapper>
            {selectedImage ? (
              <StyledImage src={selectedImage} />
            ) : (
              <StyledImage src={avatar} />
            )}
            <StyledButton
              variant={ButtonVariant.Black}
              onClick={e => handleButtonClick(e)}
            >
              <input
                type="file"
                {...rest}
                ref={e => {
                  registerRef(e);
                }}
                onChange={e => (onChange(e), handleFileChange(e))}
              />
              <UploadAvatar />
              {t('fillProfile.generalInfoCard.uploadPhotoButton')}
            </StyledButton>
            {errors.image && <p>{errors.image.message}</p>}
          </UploadPhotoWrapper>
        </StyledForm>
        <StyledForm>
          <StyledFormContainer>
            <StyledTitle>
              {t('fillProfile.generalInfoCard.phoneTitle')}
            </StyledTitle>
            <StyledSubtitle>
              {t('fillProfile.generalInfoCard.phoneSubTitle')}
            </StyledSubtitle>
          </StyledFormContainer>
          <PhoneWrapper>
            <Controller
              name="phone"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <PhoneInput
                  {...field}
                  defaultCountry="ca"
                  countries={countries}
                />
              )}
            />
            {errors.phone && <p>{errors.phone.message}</p>}
          </PhoneWrapper>
        </StyledForm>
        <ButtonsContainer>
          <StyledButton
            variant={ButtonVariant.White}
            onClick={() => setSelectedIndex(index - 1)}
          >
            {t('fillProfile.prevButton')}
          </StyledButton>
          <StyledButton
            key={uuidv4()}
            variant={ButtonVariant.Black}
            type="submit"
          >
            {t('fillProfile.nextButton')}
          </StyledButton>
        </ButtonsContainer>
      </form>
    </StyledTabContainer>
  );
};

export default GeneralInfoCard;
