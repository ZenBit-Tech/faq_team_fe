import { FormEvent } from 'react';
import { useTranslation } from 'react-i18next';
import {
  PaymentElement,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js';
import { useSaveCardInfoMutation } from 'redux/authApiSlice';
import { v4 as uuidv4 } from 'uuid';

import {
  StyledForm,
  StyledFormWrapper,
} from 'components/fillProfileForm/cardInfoCard/styles';
import {
  billingDetails,
  paymentElementOptions,
} from 'components/fillProfileForm/constants';
import {
  ButtonsContainer,
  StyledButton,
  StyledCard,
  StyledFormContainer,
  StyledSubtitle,
  StyledTabContainer,
  StyledTitle,
} from 'components/fillProfileForm/sharedStyles';
import { ButtonVariant, TabProps } from 'components/fillProfileForm/types';

const CheckoutForm = ({ setSelectedIndex, index, data }: TabProps) => {
  const { t } = useTranslation();

  const [registrationSaveCardInfo] = useSaveCardInfoMutation();

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    await elements.submit();

    const { paymentMethod } = await stripe.createPaymentMethod({
      elements,
      params: {
        billing_details: billingDetails(data),
      },
    });

    await registrationSaveCardInfo({ paymentMethod, id: data.id });
    setSelectedIndex(index + 1);
  };

  return (
    <StyledTabContainer onSubmit={handleSubmit}>
      <StyledCard>
        <StyledFormContainer>
          <StyledTitle>{t('fillProfile.cardInfoCard.title')}</StyledTitle>
          <StyledSubtitle>
            {t('fillProfile.cardInfoCard.subTitle')}
          </StyledSubtitle>
        </StyledFormContainer>
        <StyledFormWrapper>
          <StyledForm id="payment-form">
            <PaymentElement
              id="payment-element"
              options={paymentElementOptions}
            />
          </StyledForm>
        </StyledFormWrapper>{' '}
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
          type="submit"
        >
          {t('fillProfile.nextButton')}
        </StyledButton>
      </ButtonsContainer>
    </StyledTabContainer>
  );
};

export default CheckoutForm;
