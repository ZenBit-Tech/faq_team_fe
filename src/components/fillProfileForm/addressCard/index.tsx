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

const schema = yup.object().shape({
  address1: yup
    .string()
    .required('Address 1 is required')
    .matches(addressValidationRegex, 'Address 1 contains invalid characters')
    .min(5, 'Address 1 must be at least 5 characters long')
    .max(100, 'Address 1 must be at most 100 characters long'),
  address2: yup
    .string()
    .optional()
    .matches(addressValidationRegex, 'Address 2 contains invalid characters')
    .max(100, 'Address 2 must be at most 100 characters long'),
  country: yup
    .mixed<Country>()
    .oneOf(countriesOptions, 'Country is required')
    .required('Country is required'),
  state: yup
    .mixed<(typeof statesOptions)[Country][number]>()
    .required('State is required'),
  city: yup
    .mixed<(typeof citiesOptions)[Country][number]>()
    .required('City is required'),
});

const AddressForm = ({ setSelectedIndex, index }: TabProps) => {
  const { t } = useTranslation();

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
    <StyledTabContainer>
      <StyledCard>
        <StyledFormContainer>
          <StyledTitle>{t('fillProfile.addressCard.title')}</StyledTitle>
          <StyledSubtitle>
            {t('fillProfile.addressCard.subTitle')}
          </StyledSubtitle>
        </StyledFormContainer>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
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
          {errors.address1 && <span>{errors.address1.message}</span>}

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
          {errors.address2 && <span>{errors.address2.message}</span>}
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
          {errors.country && <span>{errors.country.message}</span>}
          <>
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
            {errors.state && <span>{errors.state.message}</span>}
          </>
          <>
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
            {errors.city && <span>{errors.city.message}</span>}
          </>

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
