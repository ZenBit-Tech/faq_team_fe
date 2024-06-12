import { useState } from 'react';
import {
  StyledForm,
  StyledTitle,
  StyledSubtitle,
  StyledFormContainer,
} from 'components/fillProfileForm/generalInfoCard/styles';
import { StyledButton } from 'components/fillProfileForm/styles';
import avatar from 'assets/images/avatar.png';
import UploadAvatar from 'assets/icons/uploadAvatar';
import {
  PhoneInput,
  defaultCountries,
  parseCountry,
} from 'react-international-phone';
import 'react-international-phone/style.css';
import { useTranslation } from 'react-i18next';
import { ButtonVariant } from 'components/fillProfileForm/types';

const countryCodes = ['ua', 'ca'];

const countries = defaultCountries.filter(country => {
  const { iso2 } = parseCountry(country);
  return countryCodes.includes(iso2);
});

const GeneralInfoCard = () => {
  const [phone, setPhone] = useState<string>('');
  const { t } = useTranslation();

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
        <img src={avatar} />
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
