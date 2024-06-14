import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  defaultCountries,
  parseCountry,
  PhoneInput,
} from 'react-international-phone';
import { v4 as uuidv4 } from 'uuid';

import UploadAvatar from 'assets/icons/uploadAvatar';
import avatar from 'assets/images/avatar.png';
import {
  PhoneWrapper,
  StyledImage,
  UploadPhotoWrapper,
} from 'components/fillProfileForm/generalInfoCard/styles';
import {
  ButtonsContainer,
  StyledButton,
  StyledForm,
  StyledFormContainer,
  StyledSubtitle,
  StyledTabContainer,
  StyledTitle,
} from 'components/fillProfileForm/sharedStyles';
import { ButtonVariant, TabProps } from 'components/fillProfileForm/types';

import 'react-international-phone/style.css';

const countryCodes = ['ua', 'ca'];

const countries = defaultCountries.filter(country => {
  const { iso2 } = parseCountry(country);
  return countryCodes.includes(iso2);
});

const GeneralInfoCard = ({ setSelectedIndex, index }: TabProps) => {
  const { t } = useTranslation();

  const [phone, setPhone] = useState<string>('');

  return (
    <StyledTabContainer>
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
          <StyledImage src={avatar} />
          <StyledButton variant={ButtonVariant.Black}>
            <UploadAvatar />
            {t('fillProfile.generalInfoCard.uploadPhotoButton')}
          </StyledButton>
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
          <PhoneInput
            defaultCountry="ua"
            value={phone}
            onChange={phone => setPhone(phone)}
            countries={countries}
          />
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
          onClick={() => setSelectedIndex(index + 1)}
        >
          {t('fillProfile.nextButton')}
        </StyledButton>
      </ButtonsContainer>
    </StyledTabContainer>
  );
};

export default GeneralInfoCard;
