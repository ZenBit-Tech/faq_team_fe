import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  defaultCountries,
  parseCountry,
  PhoneInput,
} from 'react-international-phone';
import UploadAvatar from 'assets/icons/uploadAvatar';
import avatar from 'assets/images/avatar.png';
import { StyledImage } from 'components/fillProfileForm/generalInfoCard/styles';
import {
  StyledButton,
  StyledForm,
  StyledFormContainer,
  StyledSubtitle,
  StyledTitle,
} from 'components/fillProfileForm/sharedStyles';
import { ButtonVariant } from 'components/fillProfileForm/types';

import 'react-international-phone/style.css';

const countryCodes = ['ua', 'ca'];

const countries = defaultCountries.filter(country => {
  const { iso2 } = parseCountry(country);
  return countryCodes.includes(iso2);
});

const GeneralInfoCard = () => {
  const { t } = useTranslation();

  const [phone, setPhone] = useState<string>('');

  return (
    <>
      <StyledForm>
        <StyledFormContainer>
          <StyledTitle>
            {t('fillProfile.generalInfoCard.photoTitle')}
          </StyledTitle>
          <StyledSubtitle>
            {t('fillProfile.generalInfoCard.photoSubTitle')}
          </StyledSubtitle>
        </StyledFormContainer>
        <StyledImage src={avatar} />
        <StyledButton variant={ButtonVariant.Black}>
          <UploadAvatar />
          {t('fillProfile.generalInfoCard.uploadPhotoButton')}
        </StyledButton>
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
        <div>
          <PhoneInput
            defaultCountry="ua"
            value={phone}
            onChange={phone => setPhone(phone)}
            countries={countries}
          />
        </div>
      </StyledForm>
    </>
  );
};

export default GeneralInfoCard;
