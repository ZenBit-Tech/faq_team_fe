import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  cities,
  countries,
  states,
} from 'components/fillProfileForm/addressCard/constants';
import { StyledForm } from 'components/fillProfileForm/addressCard/styles';
import {
  StyledCard,
  StyledFormContainer,
  StyledInput,
  StyledSubtitle,
  StyledTitle,
} from 'components/fillProfileForm/sharedStyles';

const AddressForm = () => {
  const { t } = useTranslation();

  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');

  const handleCountryChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
  ): void => {
    setCountry(e.target.value);
    setState('');
    setCity('');
  };

  const handleStateChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setState(e.target.value);
    setCity('');
  };
  return (
    <StyledCard>
      <StyledFormContainer>
        <StyledTitle>{t('fillProfile.addressCard.title')}</StyledTitle>
        <StyledSubtitle>{t('fillProfile.addressCard.subTitle')}</StyledSubtitle>
      </StyledFormContainer>
      <StyledForm>
        <label>{t('fillProfile.addressCard.address1')}</label>
        <StyledInput
          type="text"
          placeholder={t('fillProfile.addressCard.address1')}
        />
        <label>{t('fillProfile.addressCard.address2')}</label>
        <StyledInput
          type="text"
          placeholder={t('fillProfile.addressCard.address1')}
        />

        <label>{t('fillProfile.addressCard.country')}</label>
        <select value={country} onChange={handleCountryChange}>
          <option disabled>{t('fillProfile.addressCard.selectCountry')}</option>
          {countries.map(country => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>

        {country && country === countries[1] && (
          <>
            <label>{t('fillProfile.addressCard.state')}</label>
            <select value={state} onChange={handleStateChange}>
              <option disabled>
                {t('fillProfile.addressCard.selectState')}
              </option>
              {states[country as keyof typeof states].map(state => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </>
        )}
        {(country === countries[0] || state) && (
          <>
            <label>{t('fillProfile.addressCard.city')}</label>
            <select value={city} onChange={e => setCity(e.target.value)}>
              <option disabled>
                {t('fillProfile.addressCard.selectCity')}
              </option>
              {cities[country as keyof typeof cities].map(city => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </>
        )}
      </StyledForm>
    </StyledCard>
  );
};

export default AddressForm;
