import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { StyledForm } from 'components/fillProfileForm/addressCard/styles';
import {
  StyledCard,
  StyledFormContainer,
  StyledInput,
  StyledSubtitle,
  StyledTitle,
} from 'components/fillProfileForm/sharedStyles';
import {
  citiesOptions,
  countriesOptions,
  statesOptions,
} from 'const/constants';
import { v4 as uuidv4 } from 'uuid';

const AddressForm = () => {
  const { t } = useTranslation();

  const [country, setCountry] = useState(countriesOptions[0]);
  const [state, setState] = useState(
    statesOptions[country as keyof typeof statesOptions][0],
  );
  const [city, setCity] = useState(
    statesOptions[country as keyof typeof statesOptions][0],
  );

  const handleCountryChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
  ): void => {
    setCountry(e.target.value);
  };

  const handleStateChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setState(e.target.value);
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
          {countriesOptions.map(country => (
            <option key={uuidv4()} value={country}>
              {country}
            </option>
          ))}
        </select>
        {country && (
          <>
            <label>{t('fillProfile.addressCard.state')}</label>
            <select value={state} onChange={handleStateChange}>
              <option disabled>
                {t('fillProfile.addressCard.selectState')}
              </option>
              {statesOptions[country as keyof typeof statesOptions].map(
                state => (
                  <option key={uuidv4()} value={state}>
                    {state}
                  </option>
                ),
              )}
            </select>
          </>
        )}
        {state && (
          <>
            <label>{t('fillProfile.addressCard.city')}</label>
            <select value={city} onChange={e => setCity(e.target.value)}>
              <option disabled>
                {t('fillProfile.addressCard.selectCity')}
              </option>
              {citiesOptions[country as keyof typeof citiesOptions].map(
                city => (
                  <option key={uuidv4()} value={city}>
                    {city}
                  </option>
                ),
              )}
            </select>
          </>
        )}
      </StyledForm>
    </StyledCard>
  );
};

export default AddressForm;
