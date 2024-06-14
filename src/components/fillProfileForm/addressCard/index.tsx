import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { v4 as uuidv4 } from 'uuid';

import { StyledForm } from 'components/fillProfileForm/addressCard/styles';
import {
  ButtonsContainer,
  StyledButton,
  StyledCard,
  StyledFormContainer,
  StyledInput,
  StyledSubtitle,
  StyledTabContainer,
  StyledTitle,
} from 'components/fillProfileForm/sharedStyles';
import { ButtonVariant, TabProps } from 'components/fillProfileForm/types';
import {
  citiesOptions,
  countriesOptions,
  statesOptions,
} from 'const/constants';

const AddressForm = ({ setSelectedIndex, index }: TabProps) => {
  const { t } = useTranslation();

  const [country, setCountry] = useState(countriesOptions[0]);
  const [state, setState] = useState('');
  const [city, setCity] = useState('');

  const handleCountryChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
  ): void => {
    setCountry(e.target.value);
  };

  const handleStateChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setState(e.target.value);
  };

  return (
    <StyledTabContainer>
      <StyledCard>
        <StyledFormContainer>
          <StyledTitle>{t('fillProfile.addressCard.title')}</StyledTitle>
          <StyledSubtitle>
            {t('fillProfile.addressCard.subTitle')}
          </StyledSubtitle>
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
            <option disabled>
              {t('fillProfile.addressCard.selectCountry')}
            </option>
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
      <ButtonsContainer>
        <StyledButton
          variant={ButtonVariant.White}
          onClick={() => setSelectedIndex(index - 1)}
          key={uuidv4()}
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

export default AddressForm;
