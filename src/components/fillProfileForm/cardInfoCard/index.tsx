import { useTranslation } from 'react-i18next';
import {
  StyledContainer,
  StyledRow,
  StyledSmallInput,
} from 'components/fillProfileForm/cardInfoCard/styles';
import {
  StyledCard,
  StyledFormContainer,
  StyledInput,
  StyledSubtitle,
  StyledTitle,
} from 'components/fillProfileForm/sharedStyles';

const expDatePH = 'MM/YYYY';
const cvvPH = 'CVV';

const CreditCardForm = () => {
  const { t } = useTranslation();

  return (
    <StyledCard>
      <StyledFormContainer>
        <StyledTitle>{t('fillProfile.cardInfoCard.title')}</StyledTitle>
        <StyledSubtitle>
          {t('fillProfile.cardInfoCard.subTitle')}
        </StyledSubtitle>
      </StyledFormContainer>
      <StyledContainer>
        <StyledInput
          type="text"
          placeholder={t('fillProfile.cardInfoCard.cardNumber')}
        />
        <StyledRow>
          <StyledSmallInput type="text" placeholder={expDatePH} />
          <StyledSmallInput type="text" placeholder={cvvPH} />
        </StyledRow>
      </StyledContainer>
    </StyledCard>
  );
};

export default CreditCardForm;
