import { useState } from 'react';
import {
  StyledForm,
  StyledTitle,
  StyledSubtitle,
  StyledFormContainer,
} from './styles';
import { StyledButton } from '../styles';
import avatar from 'assets/images/avatar.png';
import UploadAvatar from 'assets/icons/uploadAvatar';
import {
  PhoneInput,
  defaultCountries,
  parseCountry,
} from 'react-international-phone';
import 'react-international-phone/style.css';

const GeneralInfoCard = () => {
  const [phone, setPhone] = useState('');
  const countries = defaultCountries.filter(country => {
    const { iso2 } = parseCountry(country);
    return ['us', 'ua', 'gb'].includes(iso2);
  });
  return (
    <>
      <StyledForm>
        <StyledFormContainer>
          <StyledTitle>Title</StyledTitle>
          <StyledSubtitle>Subtitle</StyledSubtitle>
        </StyledFormContainer>
        <img src={avatar} />
        <StyledButton variant="black">
          <UploadAvatar />
          Upload Photo
        </StyledButton>
      </StyledForm>
      <StyledForm>
        <StyledFormContainer>
          <StyledTitle>Title</StyledTitle>
          <StyledSubtitle>Subtitle</StyledSubtitle>
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
