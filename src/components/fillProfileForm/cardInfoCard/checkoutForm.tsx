import { FormEvent } from 'react';
import { useTranslation } from 'react-i18next';
import {
  PaymentElement,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js';
import { v4 as uuidv4 } from 'uuid';

import {
  StyledForm,
  StyledFormWrapper,
} from 'components/fillProfileForm/cardInfoCard/styles';
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

const CheckoutForm = ({ setSelectedIndex, index }: TabProps) => {
  const { t } = useTranslation();

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
        // TODO: pull this data from redux state
        billing_details: {
          name: 'misha',
          email: 'misha@gmail.com',
          phone: '+1234567890',
          address: {
            country: 'US',
            postal_code: '30033',
            state: 'Kyiv',
            city: 'Kyiv',
            line1: 'address 1',
            line2: 'address 2',
          },
        },
      },
    });

    JSON.stringify(paymentMethod);
  };

  const paymentElementOptions = {
    layout: 'tabs',
    fields: {
      billingDetails: 'never',
    },
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
          onClick={() => setSelectedIndex(index + 1)}
          type="submit"
        >
          {t('fillProfile.nextButton')}
        </StyledButton>
      </ButtonsContainer>
    </StyledTabContainer>
  );
};

export default CheckoutForm;
