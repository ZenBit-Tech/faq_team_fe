import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { yupResolver } from '@hookform/resolvers/yup';
import { v4 as uuidv4 } from 'uuid';
import * as yup from 'yup';

import { StyledForm } from 'components/fillProfileForm/addressCard/styles';
import {
  ButtonsContainer,
  StyledButton,
  StyledCard,
  StyledFormBlock,
  StyledFormContainer,
  StyledInput,
  StyledSubtitle,
  StyledTabContainer,
  StyledTitle,
} from 'components/fillProfileForm/sharedStyles';
import {
  AddressSchema,
  ButtonVariant,
  Country,
  TabProps,
} from 'components/fillProfileForm/types';
import {
  citiesOptions,
  countriesOptions,
  statesOptions,
} from 'const/constants';

const addressValidationRegex = /^[a-zA-Z0-9\s,-]*$/;

const AddressForm = ({ setSelectedIndex, index }: TabProps) => {
  const { t } = useTranslation();

  const schema = yup.object().shape({
    address1: yup
      .string()
      .required(t('fillProfile.addressCard.address1Required'))
      .matches(
        addressValidationRegex,
        t('fillProfile.addressCard.address1Invalid'),
      )
      .min(5, t('fillProfile.addressCard.address1Short'))
      .max(100, t('fillProfile.addressCard.address1Long')),
    address2: yup
      .string()
      .optional()
      .matches(
        addressValidationRegex,
        t('fillProfile.addressCard.address2Invalid'),
      )
      .max(100, t('fillProfile.addressCard.address2Long')),
    country: yup
      .mixed<Country>()
      .required(t('fillProfile.addressCard.countryRequired')),
    state: yup
      .mixed<(typeof statesOptions)[Country][number]>()
      .required(t('fillProfile.addressCard.stateRequired')),
    city: yup
      .mixed<(typeof citiesOptions)[Country][number]>()
      .required(t('fillProfile.addressCard.cityRequired')),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<AddressSchema>({
    resolver: yupResolver(schema),
    defaultValues: {
      address1: '',
      address2: '',
      country: countriesOptions[0],
      state: statesOptions[countriesOptions[0]][0],
      city: citiesOptions[countriesOptions[0]][0],
    },
  });

  const onSubmit: SubmitHandler<AddressSchema> = data => {
    JSON.stringify(data);
    setSelectedIndex(index + 1);
  };

  return (
    <StyledTabContainer onSubmit={handleSubmit(onSubmit)}>
      <StyledCard>
        <StyledFormContainer>
          <StyledTitle>{t('fillProfile.addressCard.title')}</StyledTitle>
          <StyledSubtitle>
            {t('fillProfile.addressCard.subTitle')}
          </StyledSubtitle>
        </StyledFormContainer>
        <StyledForm>
          <StyledFormBlock>
            <label>{t('fillProfile.addressCard.address1')}</label>
            <Controller
              name="address1"
              control={control}
              render={({ field }) => (
                <StyledInput
                  type="text"
                  placeholder={t('fillProfile.addressCard.address1')}
                  {...field}
                />
              )}
            />
            <p>{errors.address1 && errors.address1.message}</p>
          </StyledFormBlock>
          <StyledFormBlock>
            <label>{t('fillProfile.addressCard.address2')}</label>
            <Controller
              name="address2"
              control={control}
              render={({ field }) => (
                <StyledInput
                  type="text"
                  placeholder={t('fillProfile.addressCard.address2')}
                  {...field}
                />
              )}
            />
            <p>{errors.address2 && errors.address2.message}</p>
          </StyledFormBlock>
          <StyledFormBlock>
            <label>{t('fillProfile.addressCard.country')}</label>
            <Controller
              name="country"
              control={control}
              render={({ field }) => (
                <select {...field}>
                  <option disabled>
                    {t('fillProfile.addressCard.selectCountry')}
                  </option>
                  {countriesOptions.map(country => (
                    <option key={uuidv4()} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
              )}
            />
            <p>{errors.country && errors.country.message}</p>
          </StyledFormBlock>
          <StyledFormBlock>
            <label>{t('fillProfile.addressCard.state')}</label>
            <Controller
              name="state"
              control={control}
              render={({ field }) => (
                <select {...field}>
                  <option disabled>
                    {t('fillProfile.addressCard.selectState')}
                  </option>
                  {statesOptions[countriesOptions[0]].map(state => (
                    <option key={uuidv4()} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
              )}
            />
            <p>{errors.state && errors.state.message}</p>
          </StyledFormBlock>
          <StyledFormBlock>
            <label>{t('fillProfile.addressCard.city')}</label>
            <Controller
              name="city"
              control={control}
              render={({ field }) => (
                <select {...field}>
                  <option disabled>
                    {t('fillProfile.addressCard.selectCity')}
                  </option>
                  {citiesOptions[countriesOptions[0]].map(city => (
                    <option key={uuidv4()} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              )}
            />
            <p>{errors.city && errors.city.message}</p>
          </StyledFormBlock>

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
              type="submit"
            >
              {t('fillProfile.nextButton')}
            </StyledButton>
          </ButtonsContainer>
        </StyledForm>
      </StyledCard>
    </StyledTabContainer>
  );
};

export default AddressForm;
