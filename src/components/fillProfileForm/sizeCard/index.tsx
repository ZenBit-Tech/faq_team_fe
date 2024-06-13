import { useTranslation } from 'react-i18next';
import {
  StyledForm,
  StyledFormContainer,
  StyledSubtitle,
  StyledTitle,
} from 'components/fillProfileForm/sharedStyles';
import {
  clothesSizes,
  jeansSizes,
  shoesSizes,
} from 'components/fillProfileForm/sizeCard/constants';
import { StyledSelect } from 'components/fillProfileForm/sizeCard/styles';

const SizeForm = () => {
  const { t } = useTranslation();

  return (
    <>
      <StyledForm>
        <StyledFormContainer>
          <StyledTitle>{t('fillProfile.sizeCard.clothTitle')}</StyledTitle>
          <StyledSubtitle>
            {t('fillProfile.sizeCard.clothSubTitle')}
          </StyledSubtitle>
        </StyledFormContainer>
        <StyledSelect defaultValue={clothesSizes[0]}>
          <option disabled>{t('fillProfile.sizeCard.selectClothSize')}</option>
          {clothesSizes.map(element => (
            <option value={element}>{element}</option>
          ))}
        </StyledSelect>
      </StyledForm>
      <StyledForm>
        <StyledFormContainer>
          <StyledTitle>{t('fillProfile.sizeCard.shoeTitle')}</StyledTitle>
          <StyledSubtitle>
            {t('fillProfile.sizeCard.shoeSubTitle')}
          </StyledSubtitle>
        </StyledFormContainer>
        <StyledSelect defaultValue={shoesSizes[0]}>
          <option disabled>{t('fillProfile.sizeCard.selectShoeSize')}</option>
          {shoesSizes.map(element => (
            <option value={element}>{element}</option>
          ))}
        </StyledSelect>
      </StyledForm>
      <StyledForm>
        <StyledFormContainer>
          <StyledTitle>{t('fillProfile.sizeCard.jeansTitle')}</StyledTitle>
          <StyledSubtitle>
            {t('fillProfile.sizeCard.jeansSubTitle')}
          </StyledSubtitle>
        </StyledFormContainer>
        <StyledSelect defaultValue={jeansSizes[0]}>
          <option disabled>{t('fillProfile.sizeCard.selectJeansSize')}</option>
          {jeansSizes.map(element => (
            <option value={element}>{element}</option>
          ))}
        </StyledSelect>
      </StyledForm>
    </>
  );
};

export default SizeForm;
