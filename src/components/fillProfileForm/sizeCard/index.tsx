import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { yupResolver } from '@hookform/resolvers/yup';
import { v4 as uuidv4 } from 'uuid';

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
  clothesSizes,
  jeansSizes,
  shoesSizes,
} from 'components/fillProfileForm/sizeCard/constants';
import { StyledSelect } from 'components/fillProfileForm/sizeCard/styles';
import {
  ButtonVariant,
  Sizes,
  TabProps,
} from 'components/fillProfileForm/types';
import { sizeSchema } from 'components/fillProfileForm/validation';

const SizeForm = ({ setSelectedIndex, index }: TabProps) => {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Sizes>({
    defaultValues: {
      clothSize: clothesSizes[0],
      shoeSize: shoesSizes[0],
      jeansSize: jeansSizes[0],
    },
    resolver: yupResolver(sizeSchema),
  });

  const onSubmit: SubmitHandler<Sizes> = data => {
    JSON.stringify(data);
    setSelectedIndex(index - 1);
  };

  return (
    <StyledTabContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <StyledForm>
          <StyledFormContainer>
            <StyledTitle>{t('fillProfile.sizeCard.clothTitle')}</StyledTitle>
            <StyledSubtitle>
              {t('fillProfile.sizeCard.clothSubTitle')}
            </StyledSubtitle>
          </StyledFormContainer>
          <StyledSelect {...register('clothSize')}>
            <option disabled>
              {t('fillProfile.sizeCard.selectClothSize')}
            </option>
            {clothesSizes.map(element => (
              <option key={uuidv4()} value={element}>
                {element}
              </option>
            ))}
          </StyledSelect>
          {errors.clothSize && <p>{t('fillProfile.sizeCard.requiredError')}</p>}
        </StyledForm>
        <StyledForm>
          <StyledFormContainer>
            <StyledTitle>{t('fillProfile.sizeCard.shoeTitle')}</StyledTitle>
            <StyledSubtitle>
              {t('fillProfile.sizeCard.shoeSubTitle')}
            </StyledSubtitle>
          </StyledFormContainer>
          <StyledSelect {...register('shoeSize')}>
            <option disabled>{t('fillProfile.sizeCard.selectShoeSize')}</option>
            {shoesSizes.map(element => (
              <option key={uuidv4()} value={element}>
                {element}
              </option>
            ))}
          </StyledSelect>
          {errors.shoeSize && <p>{t('fillProfile.sizeCard.requiredError')}</p>}
        </StyledForm>
        <StyledForm>
          <StyledFormContainer>
            <StyledTitle>{t('fillProfile.sizeCard.jeansTitle')}</StyledTitle>
            <StyledSubtitle>
              {t('fillProfile.sizeCard.jeansSubTitle')}
            </StyledSubtitle>
          </StyledFormContainer>
          <StyledSelect {...register('jeansSize')}>
            <option disabled>
              {t('fillProfile.sizeCard.selectJeansSize')}
            </option>
            {jeansSizes.map(element => (
              <option key={uuidv4()} value={element}>
                {element}
              </option>
            ))}
          </StyledSelect>
          {errors.jeansSize && <p>{t('fillProfile.sizeCard.requiredError')}</p>}
        </StyledForm>
        <ButtonsContainer>
          <StyledButton variant={ButtonVariant.White} type="submit">
            {t('fillProfile.prevButton')}
          </StyledButton>
        </ButtonsContainer>
      </form>
    </StyledTabContainer>
  );
};

export default SizeForm;
